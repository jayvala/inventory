/**
 * @file
 * SEARCH AUTOCOMPLETE javascript mechanism.
 */

(function ($, Drupal, drupalSettings, once, DOMPurify) {

  'use strict';

  if (typeof DOMPurify !== 'undefined') {
    // Add a hook to keep script tag but sanitize it via Drupal.checkPlain().
    DOMPurify.addHook('uponSanitizeElement', function (node, data) {
      if (data.tagName === 'script') {
        node.outerHTML = Drupal.checkPlain(node.outerHTML);
        return node;
      }
    });
  }

  var autocomplete;

  // Escape characters in pattern before creating regexp.
  function escapeRegExp(str) {
    str = $.trim(str);
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }

  /**
   * Helper splitting terms from the autocomplete value.
   *
   * @param {String} value
   *
   * @return {Array}
   */
  function autocompleteSplitValues(value) {
    // We will match the value against comma-separated terms.
    var result = [];
    var quote = false;
    var current = '';
    var valueLength = value.length;
    var i, character;

    for (i = 0; i < valueLength; i++) {
      character = value.charAt(i);
      if (character === '"') {
        current += character;
        quote = !quote;
      }
      else if (character === ',' && !quote) {
        result.push(current.trim());
        current = '';
      }
      else {
        current += character;
      }
    }
    if (value.length > 0) {
      result.push($.trim(current));
    }

    return result;
  }

  /**
   * Returns the last value of an multi-value textfield.
   *
   * @param {String} terms
   *
   * @return {String}
   */
  function extractLastTerm(terms) {
    return autocomplete.splitValues(terms).pop();
  }

  /**
   * The search handler is called before a search is performed.
   *
   * @param {Object} event
   *
   * @return {Boolean}
   */
  function searchHandler(event) {
    var options = autocomplete.options;
    var term = autocomplete.extractLastTerm(event.target.value);
    // Abort search if the first character is in firstCharacterBlacklist.
    if (term.length > 0 && options.firstCharacterBlacklist.indexOf(term[0]) !== -1) {
      return false;
    }
    // Only search when the term is at least the minimum length.
    return term.length >= options.minLength;
  }

  /**
   * jQuery UI autocomplete source callback.
   *
   * @param {Object} request
   * @param {Function} response
   */
  function sourceData(request, response) {
    var elementId = this.element.attr('id');

    // Build empty cache for this element.
    if (!(elementId in autocomplete.cache)) {
      autocomplete.cache[elementId] = {};
    }

    // Retrieve the key for this element.
    var key = this.element.data('key');

    /**
     * Filter through the suggestions removing all terms already tagged and
     * display the available terms to the user.
     *
     * @param {Object} suggestions
     */
    function showSuggestions(suggestions) {
      var tagged = autocomplete.splitValues(request.term);
      for (var i = 0, il = tagged.length; i < il; i++) {
        var index = suggestions.indexOf(tagged[i]);
        if (index >= 0) {
          suggestions.splice(index, 1);
        }
      }
      response(suggestions);
    }

    /**
     * Transforms the data object into an array and update autocomplete results.
     *
     * @param {Object} data
     */
    function sourceCallbackHandler(data) {
      // Reduce number to limit.
      const length = data.length;
      if (key) {
        data = data.slice(0, autocomplete.options.forms[key].maxSuggestions);
      }

      // Add no_result or more_results depending on the situation.
      if (key) {
        if (data.length) {
          var moreResults = replaceInObject(autocomplete.options.forms[key].moreResults, '\\[search-phrase\\]', request.term);
          moreResults = replaceInObject(moreResults, '\\[search-count\\]', length);
          data.push(moreResults);
        }
        else {
          var noResult = replaceInObject(autocomplete.options.forms[key].noResult, '\\[search-phrase\\]', request.term);
          data.push(noResult);
        }
      }

      // Cache the results.
      autocomplete.cache[elementId][term] = data;

      // Send the new string array of terms to the jQuery UI list.
      showSuggestions(data);
    }

    // Get the desired term and construct the autocomplete URL for it.
    var term = autocomplete.extractLastTerm(request.term);

    // Check if the term is already cached.
    if (autocomplete.cache[elementId].hasOwnProperty(term)) {
      showSuggestions(autocomplete.cache[elementId][term]);
    }
    else {
      var data = {};
      var path = '';
      if (key && autocomplete.options.forms[key]) {
        path = autocomplete.options.forms[key].source;
        $.each(autocomplete.options.forms[key].filters, function (key, value) {
          data[value] = term;
        });
      }
      else {
        path = this.element.attr('data-autocomplete-path');
        data.q = term;
      }
      var options = $.extend({
        success: sourceCallbackHandler,
        data: data
      }, autocomplete.ajax);
      $.ajax(path, options);
    }
  }

  /**
   * Handles an autocompletefocus event.
   *
   * @return {Boolean}
   */
  function focusHandler() {
    return false;
  }

  /**
   * Handles an autocompleteselect event.
   *
   * @param {Object} event
   * @param {Object} ui
   *
   * @return {Boolean}
   */
  function selectHandler(event, ui) {
    var terms = autocomplete.splitValues(event.target.value);
    // Remove the current input.
    terms.pop();

    // Trick here to handle encoded characters (see #2936846).
    const helper = document.createElement('textarea');
    helper.innerHTML = ui.item.value;
    ui.item.value = helper.value;

    // Add the selected item.
    if (ui.item.value.search(',') > 0) {
      terms.push('"' + ui.item.value + '"');
    }
    else {
      terms.push(ui.item.value);
    }
    event.target.value = terms.join(', ');
    var key = $(event.target).data('key');

    // Add our own handling on submission if needed
    if (key && autocomplete.options.forms[key].autoRedirect && ui.item.link) {
      // Decode '&' characters in links: #3240117.
      helper.innerHTML = ui.item.link;
      document.location.href = helper.value;
    }
    else if (key && autocomplete.options.forms[key].autoSubmit && ui.item.value) {
      $(this).val(ui.item.value);
      const form = $(this).closest('form');
      const submit = $('[type="submit"]', form);
      // If we find a submit input click on it rather then submit the form to
      // trigger the attached click behavior such as AJAX refresh
      // (case of an ajax view with expose filters for instance).
      // @see #2820337
      if (submit.length === 1) {
        submit.click();
      } else {
        form.submit();
      }
    }
    // Return false to tell jQuery UI that we've filled in the value already.
    return false;
  }

  function renderMenu(ul, items) {
    var that = this;
    let currentGroup = null;
    const content = $('<div class="ui-autocomplete-content"></div>')
    ul.append(content);
    $.each( items, function( index, item ) {
      if ('group' in item) {
        currentGroup = $('<div class="ui-autocomplete-container ui-autocomplete-container-' + item.group.group_id + '"></div>');
        if (item.group.group_id === 'more_results' || item.group.group_id === 'no_results') {
          ul.append(currentGroup);
        } else {
          content.append(currentGroup)
        }
      }
      that._renderItemData(currentGroup || ul, item);
    });
  }

  /**
   * Override jQuery UI _renderItem function to output HTML by default.
   *
   * @param {Object} ul
   * @param {Object} item
   *
   * @return {Object}
   */
  function renderItem(ul, item) {
    var term = this.term;
    var first = ('group' in item) ? 'first' : '';
    let innerHTML = '';
    var regex = new RegExp('(' + escapeRegExp(term) + ')', 'gi');

    // Move everything to fields if none defined.
    if (!item.fields) {
      item.fields = [item.label];
    }

    var helper = document.createElement('textarea');
    innerHTML = '<div class="ui-autocomplete-fields ' + first + '">';
    $.each(item.fields, function (key, value) {
      helper.innerHTML = value;
      let output = value;
      if (typeof DOMPurify !== 'undefined') {
        output = DOMPurify.sanitize(helper.value, {ADD_TAGS: ['script']});
      }
      else {
        let parser = new DOMParser();
        let doc = parser.parseFromString(helper.value, 'text/html');
        output = doc.body.textContent;
      }
      if (output.indexOf('src=') === -1 && output.indexOf('href=') === -1) {
        output = output.replace(regex, '<span class="ui-autocomplete-field-term">$1</span>');
      }
      innerHTML += ('<div class="ui-autocomplete-field-' + key + '">' + output + '</div>');
    });
    innerHTML += '</div>';

    if ('group' in item) {
      var groupId = typeof (item.group.group_id) !== 'undefined' ? item.group.group_id : '';
      var groupName = typeof (item.group.group_name) !== 'undefined' ? item.group.group_name : '';
      $('<div class="ui-autocomplete-field-group ui-state-disabled ' + groupId + '">' + groupName + '</div>').appendTo(ul);
    }
    var elem = $('<li class="ui-menu-item-' + first + ' ui-menu-item"></li>').append('<a>' + innerHTML + '</a>');
    if (item.value === '') {
      elem = $('<li class="ui-state-disabled ui-menu-item-' + first + ' ui-menu-item">' + item.label + '</li>');
    }
    elem.data('item.autocomplete', item).appendTo(ul);
    return elem;
  }

  /**
   * This method resizes the suggestion panel property.
   */
  function resizeMenu() {
    var ul = this.menu.element;
    ul.outerWidth(Math.max(ul.width('').outerWidth() + 5, this.options.position.of == null ? this.element.outerWidth() : this.options.position.of.outerWidth()));
    const parent = ul.parent()[0];
    ul.css({"maxHeight": (window.innerHeight - parent.offsetHeight - parent.getBoundingClientRect().top) + 'px'});
  }

  /**
   * This method replaces needle by replacement in stash.
   */
  function replaceInObject(stash, needle, replacement) {
    var regex = new RegExp(needle, 'g');
    var input = Drupal.checkPlain(replacement);
    var result = {};
    $.each(stash, function (index, value) {
      if ($.type(value) === 'string') {
        result[index] = value.replace(regex, input);
      }
      else {
        result[index] = value;
      }
    });
    return result;
  }

  /**
   * Attaches the autocomplete behavior to all required fields.
   */
  Drupal.behaviors.autocomplete = {
    attach: function (context) {
      // Act on textfields with the "form-autocomplete" class.
      var $autocomplete = $(context).find('input.form-autocomplete');
      // Act also on registered fields
      $.each(autocomplete.options.forms, function (key, value) {
        var elem = $(context).find(autocomplete.options.forms[key].selector).data('key', key).addClass('form-autocomplete').attr('data-id', key);
        $autocomplete = $.merge($autocomplete, elem);
      });

      $.each($autocomplete, function (_, value) {
        value = $(value);
        // Retrieve the key for this element.
        var key = value.data('key');

        // Run only once on found elements
        once('autocomplete', value);

        // If present: autocomplete those fields
        if (value.length) {
          // Allow options to be overriden per instance.
          var blacklist = value.attr('data-autocomplete-first-character-blacklist');
          // Append the autocomplete results to the form.
          var formId = '#' + $(this).closest('form').attr('id');
          $.extend(autocomplete.options, {
            firstCharacterBlacklist: (blacklist) ? blacklist : '',
            minLength: (typeof key !== 'undefined') ? autocomplete.options.forms[key].minChars : autocomplete.options.minLength,
            appendTo: (formId) ? formId : 'body',
          });

          // Use jQuery UI Autocomplete on the textfield.
          value.autocomplete(autocomplete.options).autocomplete('widget').menu( 'option', 'items', '.ui-autocomplete-container > *' );
          value.autocomplete(autocomplete.options).data('ui-autocomplete')._renderItem = autocomplete.options.renderItem;
          value.autocomplete(autocomplete.options).data('ui-autocomplete')._renderMenu = autocomplete.options.renderMenu;
          value.autocomplete(autocomplete.options).data('ui-autocomplete')._resizeMenu = autocomplete.options.resizeMenu;

          if (key) {
            // Add theme id to suggestion list.
            value.autocomplete('widget').attr('data-sa-theme', autocomplete.options.forms[key].theme);
            // Add unique key (helpfull for styling differently multiple instances on a single form).
            value.autocomplete('widget').attr('data-input-ref', key);
          }
        }
      });
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        $(once.remove('autocomplete', 'input.form-autocomplete', context))
          .autocomplete('destroy');
      }
    }
  };

  /**
   * Autocomplete object implementation.
   */
  autocomplete = {
    cache: {},
    // Exposes options to allow overriding by contrib.
    splitValues: autocompleteSplitValues,
    extractLastTerm: extractLastTerm,
    // jQuery UI autocomplete options.
    options: {
      source: sourceData,
      focus: focusHandler,
      search: searchHandler,
      select: selectHandler,
      renderItem: renderItem,
      renderMenu: renderMenu,
      resizeMenu: resizeMenu,
      minLength: 1,
      // Custom options, used by Drupal.autocomplete.
      firstCharacterBlacklist: '',
      forms: drupalSettings.search_autocomplete ? drupalSettings.search_autocomplete : []
    },
    ajax: {
      dataType: 'json'
    }
  };

  Drupal.autocomplete = autocomplete;

})(jQuery, Drupal, drupalSettings, once, DOMPurify);
