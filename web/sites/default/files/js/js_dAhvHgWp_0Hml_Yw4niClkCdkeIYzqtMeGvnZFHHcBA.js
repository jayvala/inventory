!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){"use strict";return e.ui=e.ui||{},e.ui.version="1.13.2"}));

/*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.extend(e.expr.pseudos,{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));

/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));

/*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.focusable=function(i,t){var n,s,r,u,a,o=i.nodeName.toLowerCase();return"area"===o?(s=(n=i.parentNode).name,!(!i.href||!s||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+s+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(o)?(u=!i.disabled)&&(a=e(i).closest("fieldset")[0])&&(u=!a.disabled):u="a"===o&&i.href||t,u&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"visible"===i}(e(i)))},e.extend(e.expr.pseudos,{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));

/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";if(e.expr.pseudos||(e.expr.pseudos=e.expr[":"]),e.uniqueSort||(e.uniqueSort=e.unique),!e.escapeSelector){var n=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,t=function(e,n){return n?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e};e.escapeSelector=function(e){return(e+"").replace(n,t)}}e.fn.even&&e.fn.odd||e.fn.extend({even:function(){return this.filter((function(e){return e%2==0}))},odd:function(){return this.filter((function(e){return e%2==1}))}})}));

/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.plugin={add:function(n,i,t){var u,o=e.ui[n].prototype;for(u in t)o.plugins[u]=o.plugins[u]||[],o.plugins[u].push([i,t[u]])},call:function(e,n,i,t){var u,o=e.plugins[n];if(o&&(t||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(u=0;u<o.length;u++)e.options[o[u][0]]&&o[u][1].apply(e.element,i)}}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));

/*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.scrollParent=function(e){var s=this.css("position"),n="absolute"===s,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var e=t(this);return(!n||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==s&&i.length?i:t(this[0].ownerDocument||document)}}));

/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){"use strict";return i.fn.extend({uniqueId:(e=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++e)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var e}));

/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";var e,i=0,s=Array.prototype.hasOwnProperty,n=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove");e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),Array.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr.pseudos[u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(t,e){r[t]="function"==typeof e?function(){function s(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,o=this._superApply;return this._super=s,this._superApply=n,t=e.apply(this,arguments),this._super=i,this._superApply=o,t}}():e})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,o,a=n.call(arguments,1),r=0,l=a.length;r<l;r++)for(i in a[r])o=a[r][i],s.call(a[r],i)&&void 0!==o&&(t.isPlainObject(o)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],o):t.widget.extend({},o):e[i]=o);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=n.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?"function"!=typeof n[o]||"_"===o.charAt(0)?t.error("no such method '"+o+"' for "+e+" widget instance"):(i=n[o].apply(n,r))!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(){var i=[];e.element.each((function(e,n){t.map(s.classesElementLookup,(function(t){return t})).some((function(t){return t.is(n)}))||i.push(n)})),s._on(t(i),{remove:"_untrackClassesElement"})}function o(o,a){var r,l;for(l=0;l<o.length;l++)r=s.classesElementLookup[o[l]]||t(),e.add?(n(),r=t(t.uniqueSort(r.get().concat(e.element.get())))):r=t(r.not(e.element).get()),s.classesElementLookup[o[l]]=r,i.push(o[l]),a&&e.classes[o[l]]&&i.push(e.classes[o[l]])}return(e=t.extend({element:this.element,classes:this.options.classes||{}},e)).keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})),this._off(t(e.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!("function"==typeof a&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})?n={duration:n}:!0===n&&(n={}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));

/*!
 * jQuery UI Autocomplete 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],e):e(jQuery)}((function(e){"use strict";return e.widget("ui.autocomplete",{version:"1.13.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,liveRegionTimer:null,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,u="input"===n;this.isMultiLine=o||!u&&this._isContentEditable(this.element),this.valueMethod=this.element[o||u?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,void(i=!0);t=!1,s=!1,i=!1;var o=e.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:t=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case o.UP:t=!0,this._keyEvent("previous",n);break;case o.DOWN:t=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||s.preventDefault());if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){if(s)return s=!1,void e.preventDefault();this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().attr({unselectable:"on"}).menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault()},menufocus:function(t,i){var s,n;if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",(function(){e(t.target).trigger(t.originalEvent)}));n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),(s=i.item.attr("aria-label")||n.value)&&String.prototype.trim.call(s).length&&(clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay((function(){this.liveRegion.html(e("<div>").text(s))}),100))},menuselect:function(t,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==e.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay((function(){this.previous=n,this.selectedItem=s}))),!1!==this._trigger("select",t,{item:s})&&this._value(s.value),this.term=this._value(),this.close(t),this.selectedItem=s}}),this.liveRegion=e("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(t){var i=this.menu.element[0];return t.target===this.element[0]||t.target===i||e.contains(i,t.target)},_closeOnClickOutside:function(e){this._isEventTargetInWidget(e)||this.close()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front, dialog")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;Array.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay((function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;t&&(!t||i||s)||(this.selectedItem=null,this.search(null,e))}),this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):!1!==this._trigger("search",t)?this._search(e):void 0},_search:function(e){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=++this.requestIndex;return function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}.bind(this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,(function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})}))},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,(function(e,i){s._renderItemData(t,i)}))},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<div>").text(i.label)).appendTo(t)},_move:function(e,t){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[e](t);this.search(null,t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(e,t),t.preventDefault())},_isContentEditable:function(e){if(!e.length)return!1;var t=e.prop("contentEditable");return"inherit"===t?this._isContentEditable(e.parent()):"true"===t}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=new RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,(function(e){return s.test(e.label||e.value||e)}))}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay((function(){this.liveRegion.html(e("<div>").text(i))}),100))}}),e.ui.autocomplete}));

/*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.labels=function(){var e,s,i,n,a;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(e=this.eq(0).parents().last()).add(e.length?e.siblings():this.siblings()),s="label[for='"+t.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n)):this.pushStack([])}}));

/*!
 * jQuery UI Menu 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],e):e(jQuery)}((function(e){"use strict";return e.widget("ui.menu",{version:"1.13.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.lastMousePosition={x:null,y:null},this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault(),this._activateItem(e)},"click .ui-menu-item":function(t){var i=e(t.target),s=e(e.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":"_activateItem","mousemove .ui-menu-item":"_activateItem",mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this._menuItems().first();t||this.focus(e,i)},blur:function(t){this._delay((function(){!e.contains(this.element[0],e.ui.safeActiveElement(this.document[0]))&&this.collapseAll(t)}))},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e,!0),this.mouseHandled=!1}})},_activateItem:function(t){if(!this.previousFilter&&(t.clientX!==this.lastMousePosition.x||t.clientY!==this.lastMousePosition.y)){this.lastMousePosition={x:t.clientX,y:t.clientY};var i=e(t.target).closest(".ui-menu-item"),s=e(t.currentTarget);i[0]===s[0]&&(s.is(".ui-state-active")||(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(t,s)))}},_destroy:function(){var t=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),t.children().each((function(){var t=e(this);t.data("ui-menu-submenu-caret")&&t.remove()}))},_keydown:function(t){var i,s,n,a,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,s=this.previousFilter||"",a=!1,n=t.keyCode>=96&&t.keyCode<=105?(t.keyCode-96).toString():String.fromCharCode(t.keyCode),clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),(i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i).length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay((function(){delete this.previousFilter}),1e3)):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,i,s,n,a=this,u=this.options.icons.submenu,o=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),i=o.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each((function(){var t=e(this),i=t.prev(),s=e("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+u),i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))})),this._addClass(i,"ui-menu","ui-widget ui-widget-content ui-front"),(t=o.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function(){var t=e(this);a._isDivider(t)&&a._addClass(t,"ui-menu-divider","ui-widget-content")})),n=(s=t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(s,"ui-menu-item")._addClass(n,"ui-menu-item-wrapper"),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){if("icons"===e){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,t.submenu)}this._super(e,t)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",String(e)),this._toggleClass(null,"ui-state-disabled",!!e)},focus:function(e,t){var i,s,n;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay((function(){this._close()}),this.delay),(i=t.children(".ui-menu")).length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,u,o;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),u=this.activeMenu.height(),o=t.outerHeight(),n<0?this.activeMenu.scrollTop(a+n):n+o>u&&this.activeMenu.scrollTop(a+n-u+o))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",e,{item:this.active}),this.active=null)},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay((function(){this._close(),this._open(e)}),this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay((function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s}),i?0:this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this._menuItems(this.active.children(".ui-menu")).first();t&&t.length&&(this._open(t.parent()),this._delay((function(){this.focus(e,t)})))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_menuItems:function(e){return(e||this.element).find(this.options.items).filter(".ui-menu-item")},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").last():this.active[e+"All"](".ui-menu-item").first()),s&&s.length&&this.active||(s=this._menuItems(this.activeMenu)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;this.active?this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.innerHeight(),0===e.fn.jquery.indexOf("3.2.")&&(n+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.nextAll(".ui-menu-item").each((function(){return(i=e(this)).offset().top-s-n<0})),this.focus(t,i)):this.focus(t,this._menuItems(this.activeMenu)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var i,s,n;this.active?this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.innerHeight(),0===e.fn.jquery.indexOf("3.2.")&&(n+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.prevAll(".ui-menu-item").each((function(){return(i=e(this)).offset().top-s+n>0})),this.focus(t,i)):this.focus(t,this._menuItems(this.activeMenu).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function(){return s.test(String.prototype.trim.call(e(this).children(".ui-menu-item-wrapper").text()))}))}})}));

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  var autocomplete;
  function autocompleteSplitValues(value) {
    var result = [];
    var quote = false;
    var current = '';
    var valueLength = value.length;
    var character;
    for (var i = 0; i < valueLength; i++) {
      character = value.charAt(i);
      if (character === '"') {
        current += character;
        quote = !quote;
      } else if (character === ',' && !quote) {
        result.push(current.trim());
        current = '';
      } else {
        current += character;
      }
    }
    if (value.length > 0) {
      result.push(current.trim());
    }
    return result;
  }
  function extractLastTerm(terms) {
    return autocomplete.splitValues(terms).pop();
  }
  function searchHandler(event) {
    var options = autocomplete.options;
    if (options.isComposing) {
      return false;
    }
    var term = autocomplete.extractLastTerm(event.target.value);
    if (term.length > 0 && options.firstCharacterBlacklist.indexOf(term[0]) !== -1) {
      return false;
    }
    return term.length >= options.minLength;
  }
  function sourceData(request, response) {
    var elementId = this.element.attr('id');
    if (!(elementId in autocomplete.cache)) {
      autocomplete.cache[elementId] = {};
    }
    function showSuggestions(suggestions) {
      var tagged = autocomplete.splitValues(request.term);
      var il = tagged.length;
      for (var i = 0; i < il; i++) {
        var index = suggestions.indexOf(tagged[i]);
        if (index >= 0) {
          suggestions.splice(index, 1);
        }
      }
      response(suggestions);
    }
    var term = autocomplete.extractLastTerm(request.term);
    function sourceCallbackHandler(data) {
      autocomplete.cache[elementId][term] = data;
      showSuggestions(data);
    }
    if (autocomplete.cache[elementId].hasOwnProperty(term)) {
      showSuggestions(autocomplete.cache[elementId][term]);
    } else {
      var options = $.extend({
        success: sourceCallbackHandler,
        data: {
          q: term
        }
      }, autocomplete.ajax);
      $.ajax(this.element.attr('data-autocomplete-path'), options);
    }
  }
  function focusHandler() {
    return false;
  }
  function selectHandler(event, ui) {
    var terms = autocomplete.splitValues(event.target.value);
    terms.pop();
    terms.push(ui.item.value);
    event.target.value = terms.join(', ');
    return false;
  }
  function renderItem(ul, item) {
    return $('<li>').append($('<a>').html(item.label)).appendTo(ul);
  }
  Drupal.behaviors.autocomplete = {
    attach: function attach(context) {
      var $autocomplete = $(once('autocomplete', 'input.form-autocomplete', context));
      if ($autocomplete.length) {
        var blacklist = $autocomplete.attr('data-autocomplete-first-character-blacklist');
        $.extend(autocomplete.options, {
          firstCharacterBlacklist: blacklist || ''
        });
        $autocomplete.autocomplete(autocomplete.options).each(function () {
          $(this).data('ui-autocomplete')._renderItem = autocomplete.options.renderItem;
        });
        $autocomplete.on('compositionstart.autocomplete', function () {
          autocomplete.options.isComposing = true;
        });
        $autocomplete.on('compositionend.autocomplete', function () {
          autocomplete.options.isComposing = false;
        });
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        $(once.remove('autocomplete', 'input.form-autocomplete', context)).autocomplete('destroy');
      }
    }
  };
  autocomplete = {
    cache: {},
    splitValues: autocompleteSplitValues,
    extractLastTerm: extractLastTerm,
    options: {
      source: sourceData,
      focus: focusHandler,
      search: searchHandler,
      select: selectHandler,
      renderItem: renderItem,
      minLength: 1,
      firstCharacterBlacklist: '',
      isComposing: false
    },
    ajax: {
      dataType: 'json',
      jsonp: false
    }
  };
  Drupal.autocomplete = autocomplete;
})(jQuery, Drupal);;
/**
 * @file
 * JavaScript behaviors for CodeMirror integration.
 */

(function ($, Drupal) {

  'use strict';

  // @see http://codemirror.net/doc/manual.html#config
  Drupal.webform = Drupal.webform || {};
  Drupal.webform.codeMirror = Drupal.webform.codeMirror || {};
  Drupal.webform.codeMirror.options = Drupal.webform.codeMirror.options || {};

  /**
   * Initialize CodeMirror editor.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformCodeMirror = {
    attach: function (context) {
      if (!window.CodeMirror) {
        return;
      }

      // Webform CodeMirror editor.
      $(context).find('textarea.js-webform-codemirror').once('webform-codemirror').each(function () {
        var $input = $(this);

        // Open all closed details, so that editor height is correctly calculated.
        var $details = $input.parents('details:not([open])');
        $details.attr('open', 'open');

        // #59 HTML5 required attribute breaks hack for webform submission.
        // https://github.com/marijnh/CodeMirror-old/issues/59
        $input.removeAttr('required');

        var options = $.extend({
          mode: $input.attr('data-webform-codemirror-mode'),
          lineNumbers: true,
          lineWrapping: ($input.attr('wrap') !== 'off'),
          viewportMargin: Infinity,
          readOnly: !!($input.prop('readonly') || $input.prop('disabled')),
          extraKeys: {
            // Setting for using spaces instead of tabs - https://github.com/codemirror/CodeMirror/issues/988
            Tab: function (cm) {
              var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
              cm.replaceSelection(spaces, 'end', '+element');
            },
            // On 'Escape' move to the next tabbable input.
            // @see http://bgrins.github.io/codemirror-accessible/
            Esc: function (cm) {
              // Must show and then textarea so that we can determine
              // its tabindex.
              var textarea = $(cm.getTextArea());
              $(textarea).show().addClass('visually-hidden');
              var $tabbable = $(':tabbable');
              var tabindex = $tabbable.index(textarea);
              $(textarea).hide().removeClass('visually-hidden');

              // Tabindex + 2 accounts for the CodeMirror's iframe.
              $tabbable.eq(tabindex + 2).trigger('focus');
            }

          }
        }, Drupal.webform.codeMirror.options);

        var editor = CodeMirror.fromTextArea(this, options);

        // Now, close details.
        $details.removeAttr('open');

        // Apply the textarea's min/max-height to the CodeMirror editor.
        if ($input.css('min-height')) {
          var minHeight = $input.css('min-height');
          $(editor.getWrapperElement())
            .css('min-height', minHeight)
            .find('.CodeMirror-scroll')
            .css('min-height', minHeight);
        }
        if ($input.css('max-height')) {
          var maxHeight = $input.css('max-height');
          $(editor.getWrapperElement())
            .css('max-height', maxHeight)
            .find('.CodeMirror-scroll')
            .css('max-height', maxHeight);
        }

        // Issue #2764443: CodeMirror is not setting submitted value when
        // rendered within a webform UI dialog or within an Ajaxified element.
        var changeTimer = null;
        editor.on('change', function () {
          if (changeTimer) {
            window.clearTimeout(changeTimer);
            changeTimer = null;
          }
          changeTimer = setTimeout(function () {editor.save();}, 500);
        });

        // Update CodeMirror when the textarea's value has changed.
        // @see webform.states.js
        $input.on('change', function () {
          editor.getDoc().setValue($input.val());
        });

        // Set CodeMirror to be readonly when the textarea is disabled.
        // @see webform.states.js
        $input.on('webform:disabled', function () {
          editor.setOption('readOnly', $input.is(':disabled'));
        });

        // Delay refreshing CodeMirror for 500 millisecond while the dialog is
        // still being rendered.
        // @see http://stackoverflow.com/questions/8349571/codemirror-editor-is-not-loading-content-until-clicked
        setTimeout(function () {
          // Show tab panel and open details.
          var $tabPanel = $input.parents('.ui-tabs-panel:hidden');
          var $details = $input.parents('details:not([open])');

          if (!$tabPanel.length && $details.length) {
            return;
          }

          $tabPanel.show();
          $details.attr('open', 'open');

          editor.refresh();

          // Hide tab panel and close details.
          $tabPanel.hide();
          $details.removeAttr('open');
        }, 500);
      });

      // Webform CodeMirror syntax coloring.
      if (window.CodeMirror.runMode) {
        $(context).find('.js-webform-codemirror-runmode').once('webform-codemirror-runmode').each(function () {
          // Mode Runner - http://codemirror.net/demo/runmode.html
          CodeMirror.runMode($(this).addClass('cm-s-default').text(), $(this).attr('data-webform-codemirror-mode'), this);
        });
      }

    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors for element (read) more.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Element (read) more.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformElementMore = {
    attach: function (context) {
      $(context).find('.js-webform-element-more').once('webform-element-more').each(function (event) {
        var $more = $(this);
        var $a = $more.find('a').first();
        var $content = $more.find('.webform-element-more--content');

        // Add aria-* attributes.
        $a.attr({
          'aria-expanded': false,
          'aria-controls': $content.attr('id')
        });

        // Add event handlers.
        $a.parent().on('click', toggle)
          .on('keydown', function (event) {
            // Space or Return.
            if (event.which === 32 || event.which === 13) {
              toggle(event);
            }
          });

        function toggle(event) {
          var expanded = ($a.attr('aria-expanded') === 'true');

          // Toggle `aria-expanded` attributes on link.
          $a.attr('aria-expanded', !expanded);

          // Toggle content and more .is-open state.
          if (expanded) {
            $more.removeClass('is-open');
            $content.slideUp();
          }
          else {
            $more.addClass('is-open');
            $content.slideDown();
          }

          event.preventDefault();
        }
      });
    }
  };

})(jQuery, Drupal);
;
/*
 * jQuery treetable Plugin 3.2.0
 * http://ludo.cubicphuse.nl/jquery-treetable
 *
 * Copyright 2013, Ludo van den Boom
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function($) {
  var Node, Tree, methods;

  Node = (function() {
    function Node(row, tree, settings) {
      var parentId;

      this.row = row;
      this.tree = tree;
      this.settings = settings;

      // TODO Ensure id/parentId is always a string (not int)
      this.id = this.row.data(this.settings.nodeIdAttr);

      // TODO Move this to a setParentId function?
      parentId = this.row.data(this.settings.parentIdAttr);
      if (parentId != null && parentId !== "") {
        this.parentId = parentId;
      }

      this.treeCell = $(this.row.children(this.settings.columnElType)[this.settings.column]);
      this.expander = $(this.settings.expanderTemplate);
      this.indenter = $(this.settings.indenterTemplate);
      this.children = [];
      this.initialized = false;
      this.treeCell.prepend(this.indenter);
    }

    Node.prototype.addChild = function(child) {
      return this.children.push(child);
    };

    Node.prototype.ancestors = function() {
      var ancestors, node;
      node = this;
      ancestors = [];
      while (node = node.parentNode()) {
        ancestors.push(node);
      }
      return ancestors;
    };

    Node.prototype.collapse = function() {
      if (this.collapsed()) {
        return this;
      }

      this.row.removeClass("expanded").addClass("collapsed");

      this._hideChildren();
      this.expander.attr("title", this.settings.stringExpand);

      if (this.initialized && this.settings.onNodeCollapse != null) {
        this.settings.onNodeCollapse.apply(this);
      }

      return this;
    };

    Node.prototype.collapsed = function() {
      return this.row.hasClass("collapsed");
    };

    // TODO destroy: remove event handlers, expander, indenter, etc.

    Node.prototype.expand = function() {
      if (this.expanded()) {
        return this;
      }

      this.row.removeClass("collapsed").addClass("expanded");

      if (this.initialized && this.settings.onNodeExpand != null) {
        this.settings.onNodeExpand.apply(this);
      }

      if ($(this.row).is(":visible")) {
        this._showChildren();
      }

      this.expander.attr("title", this.settings.stringCollapse);

      return this;
    };

    Node.prototype.expanded = function() {
      return this.row.hasClass("expanded");
    };

    Node.prototype.hide = function() {
      this._hideChildren();
      this.row.hide();
      return this;
    };

    Node.prototype.isBranchNode = function() {
      if(this.children.length > 0 || this.row.data(this.settings.branchAttr) === true) {
        return true;
      } else {
        return false;
      }
    };

    Node.prototype.updateBranchLeafClass = function(){
      this.row.removeClass('branch');
      this.row.removeClass('leaf');
      this.row.addClass(this.isBranchNode() ? 'branch' : 'leaf');
    };

    Node.prototype.level = function() {
      return this.ancestors().length;
    };

    Node.prototype.parentNode = function() {
      if (this.parentId != null) {
        return this.tree[this.parentId];
      } else {
        return null;
      }
    };

    Node.prototype.removeChild = function(child) {
      var i = $.inArray(child, this.children);
      return this.children.splice(i, 1)
    };

    Node.prototype.render = function() {
      var handler,
          settings = this.settings,
          target;

      if (settings.expandable === true && this.isBranchNode()) {
        handler = function(e) {
          $(this).parents("table").treetable("node", $(this).parents("tr").data(settings.nodeIdAttr)).toggle();
          return e.preventDefault();
        };

        this.indenter.html(this.expander);
        target = settings.clickableNodeNames === true ? this.treeCell : this.expander;

        target.off("click.treetable").on("click.treetable", handler);
        target.off("keydown.treetable").on("keydown.treetable", function(e) {
          if (e.keyCode == 13) {
            handler.apply(this, [e]);
          }
        });
      }

      this.indenter[0].style.paddingLeft = "" + (this.level() * settings.indent) + "px";

      return this;
    };

    Node.prototype.reveal = function() {
      if (this.parentId != null) {
        this.parentNode().reveal();
      }
      return this.expand();
    };

    Node.prototype.setParent = function(node) {
      if (this.parentId != null) {
        this.tree[this.parentId].removeChild(this);
      }
      this.parentId = node.id;
      this.row.data(this.settings.parentIdAttr, node.id);
      return node.addChild(this);
    };

    Node.prototype.show = function() {
      if (!this.initialized) {
        this._initialize();
      }
      this.row.show();
      if (this.expanded()) {
        this._showChildren();
      }
      return this;
    };

    Node.prototype.toggle = function() {
      if (this.expanded()) {
        this.collapse();
      } else {
        this.expand();
      }
      return this;
    };

    Node.prototype._hideChildren = function() {
      var child, _i, _len, _ref, _results;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.hide());
      }
      return _results;
    };

    Node.prototype._initialize = function() {
      var settings = this.settings;

      this.render();

      if (settings.expandable === true && settings.initialState === "collapsed") {
        this.collapse();
      } else {
        this.expand();
      }

      if (settings.onNodeInitialized != null) {
        settings.onNodeInitialized.apply(this);
      }

      return this.initialized = true;
    };

    Node.prototype._showChildren = function() {
      var child, _i, _len, _ref, _results;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.show());
      }
      return _results;
    };

    return Node;
  })();

  Tree = (function() {
    function Tree(table, settings) {
      this.table = table;
      this.settings = settings;
      this.tree = {};

      // Cache the nodes and roots in simple arrays for quick access/iteration
      this.nodes = [];
      this.roots = [];
    }

    Tree.prototype.collapseAll = function() {
      var node, _i, _len, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.collapse());
      }
      return _results;
    };

    Tree.prototype.expandAll = function() {
      var node, _i, _len, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.expand());
      }
      return _results;
    };

    Tree.prototype.findLastNode = function (node) {
      if (node.children.length > 0) {
        return this.findLastNode(node.children[node.children.length - 1]);
      } else {
        return node;
      }
    };

    Tree.prototype.loadRows = function(rows) {
      var node, row, i;

      if (rows != null) {
        for (i = 0; i < rows.length; i++) {
          row = $(rows[i]);

          if (row.data(this.settings.nodeIdAttr) != null) {
            node = new Node(row, this.tree, this.settings);
            this.nodes.push(node);
            this.tree[node.id] = node;

            if (node.parentId != null && this.tree[node.parentId]) {
              this.tree[node.parentId].addChild(node);
            } else {
              this.roots.push(node);
            }
          }
        }
      }

      for (i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i].updateBranchLeafClass();
      }

      return this;
    };

    Tree.prototype.move = function(node, destination) {
      // Conditions:
      // 1: +node+ should not be inserted as a child of +node+ itself.
      // 2: +destination+ should not be the same as +node+'s current parent (this
      //    prevents +node+ from being moved to the same location where it already
      //    is).
      // 3: +node+ should not be inserted in a location in a branch if this would
      //    result in +node+ being an ancestor of itself.
      var nodeParent = node.parentNode();
      if (node !== destination && destination.id !== node.parentId && $.inArray(node, destination.ancestors()) === -1) {
        node.setParent(destination);
        this._moveRows(node, destination);

        // Re-render parentNode if this is its first child node, and therefore
        // doesn't have the expander yet.
        if (node.parentNode().children.length === 1) {
          node.parentNode().render();
        }
      }

      if(nodeParent){
        nodeParent.updateBranchLeafClass();
      }
      if(node.parentNode()){
        node.parentNode().updateBranchLeafClass();
      }
      node.updateBranchLeafClass();
      return this;
    };

    Tree.prototype.removeNode = function(node) {
      // Recursively remove all descendants of +node+
      this.unloadBranch(node);

      // Remove node from DOM (<tr>)
      node.row.remove();

      // Remove node from parent children list
      if (node.parentId != null) {
        node.parentNode().removeChild(node);
      }

      // Clean up Tree object (so Node objects are GC-ed)
      delete this.tree[node.id];
      this.nodes.splice($.inArray(node, this.nodes), 1);

      return this;
    }

    Tree.prototype.render = function() {
      var root, _i, _len, _ref;
      _ref = this.roots;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        root = _ref[_i];

        // Naming is confusing (show/render). I do not call render on node from
        // here.
        root.show();
      }
      return this;
    };

    Tree.prototype.sortBranch = function(node, sortFun) {
      // First sort internal array of children
      node.children.sort(sortFun);

      // Next render rows in correct order on page
      this._sortChildRows(node);

      return this;
    };

    Tree.prototype.unloadBranch = function(node) {
      // Use a copy of the children array to not have other functions interfere
      // with this function if they manipulate the children array
      // (eg removeNode).
      var children = node.children.slice(0),
          i;

      for (i = 0; i < children.length; i++) {
        this.removeNode(children[i]);
      }

      // Reset node's collection of children
      node.children = [];

      node.updateBranchLeafClass();

      return this;
    };

    Tree.prototype._moveRows = function(node, destination) {
      var children = node.children, i;

      node.row.insertAfter(destination.row);
      node.render();

      // Loop backwards through children to have them end up on UI in correct
      // order (see #112)
      for (i = children.length - 1; i >= 0; i--) {
        this._moveRows(children[i], node);
      }
    };

    // Special _moveRows case, move children to itself to force sorting
    Tree.prototype._sortChildRows = function(parentNode) {
      return this._moveRows(parentNode, parentNode);
    };

    return Tree;
  })();

  // jQuery Plugin
  methods = {
    init: function(options, force) {
      var settings;

      settings = $.extend({
        branchAttr: "ttBranch",
        clickableNodeNames: false,
        column: 0,
        columnElType: "td", // i.e. 'td', 'th' or 'td,th'
        expandable: false,
        expanderTemplate: "<a href='#'>&nbsp;</a>",
        indent: 19,
        indenterTemplate: "<span class='indenter'></span>",
        initialState: "collapsed",
        nodeIdAttr: "ttId", // maps to data-tt-id
        parentIdAttr: "ttParentId", // maps to data-tt-parent-id
        stringExpand: "Expand",
        stringCollapse: "Collapse",

        // Events
        onInitialized: null,
        onNodeCollapse: null,
        onNodeExpand: null,
        onNodeInitialized: null
      }, options);

      return this.each(function() {
        var el = $(this), tree;

        if (force || el.data("treetable") === undefined) {
          tree = new Tree(this, settings);
          tree.loadRows(this.rows).render();

          el.addClass("treetable").data("treetable", tree);

          if (settings.onInitialized != null) {
            settings.onInitialized.apply(tree);
          }
        }

        return el;
      });
    },

    destroy: function() {
      return this.each(function() {
        return $(this).removeData("treetable").removeClass("treetable");
      });
    },

    collapseAll: function() {
      this.data("treetable").collapseAll();
      return this;
    },

    collapseNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        node.collapse();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    expandAll: function() {
      this.data("treetable").expandAll();
      return this;
    },

    expandNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        if (!node.initialized) {
          node._initialize();
        }

        node.expand();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    loadBranch: function(node, rows) {
      var settings = this.data("treetable").settings,
          tree = this.data("treetable").tree;

      // TODO Switch to $.parseHTML
      rows = $(rows);

      if (node == null) { // Inserting new root nodes
        this.append(rows);
      } else {
        var lastNode = this.data("treetable").findLastNode(node);
        rows.insertAfter(lastNode.row);
      }

      this.data("treetable").loadRows(rows);

      // Make sure nodes are properly initialized
      rows.filter("tr").each(function() {
        tree[$(this).data(settings.nodeIdAttr)].show();
      });

      if (node != null) {
        // Re-render parent to ensure expander icon is shown (#79)
        node.render().expand();
      }

      return this;
    },

    move: function(nodeId, destinationId) {
      var destination, node;

      node = this.data("treetable").tree[nodeId];
      destination = this.data("treetable").tree[destinationId];
      this.data("treetable").move(node, destination);

      return this;
    },

    node: function(id) {
      return this.data("treetable").tree[id];
    },

    removeNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        this.data("treetable").removeNode(node);
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    reveal: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        node.reveal();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    sortBranch: function(node, columnOrFunction) {
      var settings = this.data("treetable").settings,
          prepValue,
          sortFun;

      columnOrFunction = columnOrFunction || settings.column;
      sortFun = columnOrFunction;

      if ($.isNumeric(columnOrFunction)) {
        sortFun = function(a, b) {
          var extractValue, valA, valB;

          extractValue = function(node) {
            var val = node.row.find("td:eq(" + columnOrFunction + ")").text();
            // Ignore trailing/leading whitespace and use uppercase values for
            // case insensitive ordering
            return $.trim(val).toUpperCase();
          }

          valA = extractValue(a);
          valB = extractValue(b);

          if (valA < valB) return -1;
          if (valA > valB) return 1;
          return 0;
        };
      }

      this.data("treetable").sortBranch(node, sortFun);
      return this;
    },

    unloadBranch: function(node) {
      this.data("treetable").unloadBranch(node);
      return this;
    }
  };

  $.fn.treetable = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error("Method " + method + " does not exist on jQuery.treetable");
    }
  };

  // Expose classes to world
  this.TreeTable || (this.TreeTable = {});
  this.TreeTable.Node = Node;
  this.TreeTable.Tree = Tree;
})(jQuery);
;

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.tokenTree = {
    attach: function (context, settings) {
      $(once('token-tree', 'table.token-tree', context)).treetable({ expandable: true});
    }
  };

  Drupal.behaviors.tokenInsert = {
    attach: function (context, settings) {
      // Keep track of which textfield was last selected/focused.
      $('textarea, input[type="text"]', context).focus(function () {
        drupalSettings.tokenFocusedField = this;
      });

      once('token-click-insert', '.token-click-insert .token-key', context).forEach(function (token) {
        var newThis = $('<a href="javascript:void(0);" title="' + Drupal.t('Insert this token into your form') + '">' + $(token).html() + '</a>').click(function () {
          var content = this.text;

          // Always work in normal text areas that currently have focus.
          if (drupalSettings.tokenFocusedField && (drupalSettings.tokenFocusedField.tokenDialogFocus || drupalSettings.tokenFocusedField.tokenHasFocus)) {
            insertAtCursor(drupalSettings.tokenFocusedField, content);
          }
          // Direct tinyMCE support.
          else if (typeof(tinyMCE) != 'undefined' && tinyMCE.activeEditor) {
            tinyMCE.activeEditor.execCommand('mceInsertContent', false, content);
          }
          // Direct CKEditor support. Only works if the field currently has focus,
          // which is unusual since the dialog is open.
          else if (typeof(CKEDITOR) != 'undefined' && CKEDITOR.currentInstance) {
            CKEDITOR.currentInstance.insertHtml(content);
          }
          // Direct CodeMirror support.
          else if (typeof(CodeMirror) != 'undefined' && drupalSettings.tokenFocusedField && $(drupalSettings.tokenFocusedField).parents('.CodeMirror').length) {
            var editor = $(drupalSettings.tokenFocusedField).parents('.CodeMirror')[0].CodeMirror;
            editor.replaceSelection(content);
            editor.focus();
          }
          // WYSIWYG support, should work in all editors if available.
          else if (Drupal.wysiwyg && Drupal.wysiwyg.activeId) {
            Drupal.wysiwyg.instances[Drupal.wysiwyg.activeId].insert(content)
          }
          // CKeditor module support.
          else if (typeof(CKEDITOR) != 'undefined' && typeof(Drupal.ckeditorActiveId) != 'undefined') {
            CKEDITOR.instances[Drupal.ckeditorActiveId].insertHtml(content);
          }
          else if (drupalSettings.tokenFocusedField) {
            insertAtCursor(drupalSettings.tokenFocusedField, content);
          }
          else {
            alert(Drupal.t('First click a text field to insert your tokens into.'));
          }

          return false;
        });
        $(token).html(newThis);
      });

      function insertAtCursor(editor, content) {
        // Record the current scroll position.
        var scroll = editor.scrollTop;

        // IE support.
        if (document.selection) {
          editor.focus();
          var sel = document.selection.createRange();
          sel.text = content;
        }

        // Mozilla/Firefox/Netscape 7+ support.
        else if (editor.selectionStart || editor.selectionStart == '0') {
          var startPos = editor.selectionStart;
          var endPos = editor.selectionEnd;
          editor.value = editor.value.substring(0, startPos) + content + editor.value.substring(endPos, editor.value.length);
        }

        // Fallback, just add to the end of the content.
        else {
          editor.value += content;
        }

        // Ensure the textarea does not unexpectedly scroll.
        editor.scrollTop = scroll;
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * JavaScript behaviors for webforms.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Attach behaviors to trigger submit button from input onchange.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches form trigger submit events.
   */
  Drupal.behaviors.webformSubmitTrigger = {
    attach: function (context) {
      $('[data-webform-trigger-submit]').once('webform-trigger-submit').on('change', function () {
        var submit = $(this).attr('data-webform-trigger-submit');
        $(submit).trigger('mousedown');
      });
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors for select menu.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Disable select menu options using JavaScript.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformSelectOptionsDisabled = {
    attach: function (context) {
      $('select[data-webform-select-options-disabled]', context).once('webform-select-options-disabled').each(function () {
        var $select = $(this);
        var disabled = $select.attr('data-webform-select-options-disabled').split(/\s*,\s*/);
        $select.find('option').filter(function isDisabled() {
          return ($.inArray(this.value, disabled) !== -1);
        }).attr('disabled', 'disabled');
      });
    }
  };

})(jQuery, Drupal);
;
;
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
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, once) {
  Drupal.behaviors.claroAutoCompete = {
    attach: function attach(context) {
      once('claroAutoComplete', 'input.form-autocomplete', context).forEach(function (value) {
        var $input = $(value);
        var timeout = 400;
        var classRemoveTimeout;
        var classRemove = function classRemove($autoCompleteElem) {
          $autoCompleteElem.removeClass('is-autocompleting');
          $autoCompleteElem.siblings('[data-drupal-selector="autocomplete-message"]').addClass('hidden');
        };
        $input.on('input autocompletesearch autocompleteresponses', function (event) {
          if (event && event.type && event.type === 'autocompletesearch') {
            $(event.target).addClass('is-autocompleting');
            $(event.target).siblings('[data-drupal-selector="autocomplete-message"]').removeClass('hidden');
          }
          clearTimeout(classRemoveTimeout);
          classRemoveTimeout = setTimeout(classRemove, timeout, $(event.target));
        });
      });
    }
  };
})(jQuery, Drupal, once);;
/**
 * @file
 * JavaScript behaviors for roles element integration.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Enhance roles element.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformRoles = {
    attach: function (context) {
      $(context).find('.js-webform-roles-role[value="authenticated"]').once('webform-roles').each(function () {
        var $authenticated = $(this);
        var $checkboxes = $authenticated.parents('.form-checkboxes').find('.js-webform-roles-role').filter(function () {
          return ($(this).val() !== 'anonymous' && $(this).val() !== 'authenticated');
        });

        $authenticated.on('click', function () {
          if ($authenticated.is(':checked')) {
            $checkboxes.prop('checked', true).attr('disabled', true);
          }
          else {
            $checkboxes.prop('checked', false).removeAttr('disabled');
          }
        });

        if ($authenticated.is(':checked')) {
          $checkboxes.prop('checked', true).attr('disabled', true);
        }
      });
    }
  };

})(jQuery, Drupal);
;
