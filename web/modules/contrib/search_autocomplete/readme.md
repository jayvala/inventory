# SUMMARY

This module allows you to add autocomplete functionality to virtually any fields of a Drupal site. During the input, the field will be expanded and offers a list of suggestions before you start the search.
Suggestions can be provided by the View module using any of your website entity, or by a custom or even external callback.

By default, the module integrates with search forms from the Drupal core Search and Search Block, providing search among nodes, users and wording.
Basic scenarios can be done via the UI directly, for instance to provide autocompletion in a view exposed filter.

Virtually any complex scenario can be created using some easy custom code by advanced users. For instance searching among tweets, Google locations, any data an API can provide.
The custom code will therefore proxy this API call to transform it's result into something this module can digest.

For a full description visit project page: https://www.drupal.org/project/search_autocomplete

# REQUIREMENTS

*None. (Other than a clean Drupal installation)

# INSTALLATION

Install as usual. We advice using composer for this:
`composer require drupal/search_autocomplete`
**_Cleaning the cache after installation may be required._**

## Dependencies

- [DOMPurify](https://github.com/cure53/DOMPurify)

The [Libraries API](http://drupal.org/project/libraries) module is no longer required if you are using Drupal 8.9+,
OR you have put the DOMPurify library in the standard location. i.e. '[DRUPAL ROOT]/libraries')

### Tasks

1. Download the DOMPurify library from
   https://github.com/cure53/DOMPurify
   (To use Composer instead, see instructions in the Composer section below)
2. Unzip the file and rename the folder to "dompurify" (pay attention to the
   case of the letters)
3. Put the folder in one of the following places relative to drupal root.
- libraries (this is the standard location)
- profiles/PROFILE-NAME/libraries
- sites/all/libraries (ONLY if Libraries API is installed)
- sites/default/libraries
- sites/SITE-NAME/libraries
4. The following file is required:
- dist/purify.min.js
5. Ensure you have a valid path similar to this one for all files
- Ex: libraries/dompurify/dist/purify.min.js

That's it!

### Composer

Composer may be used to download the library as follows...

1. Add the following to composer.json _installer-paths_ section
   (if not already added)
   `
   "libraries/{$name}": ["type:drupal-library"]
   `

2. Add the DOMPurify package to your composer file. Use _ONE_ of the
   following methods.
* Use https://github.com/balbuf/drupal-libraries-installer
  OR
* Add the following to composer.json _repositories_ section
  (your version may differ)

      {
          "type": "package",
          "package": {
              "name": "cure53/dompurify",
              "version": "3.0.3",
              "type": "drupal-library",
              "source": {
                  "url": "https://github.com/cure53/DOMPurify.git",
                  "type": "git",
                  "reference": "3.0.3"
              }
          }
      }

3. Open a command line terminal and navigate to the same directory as your
   composer.json file and run
   `
   composer require cure53/dompurify
   `

#  CONFIGURATION

After the installation, you have can add a new Autocompletion Configuration at admin/config/search/search_autocomplete.

1. Fill out the "Human readable name" with for example "My Autocomplete search".
2. In the "ID selector" field, put the class of your Search field, for example "input#edit-keys".
3. Flush all caches

The Search Autocomplete should now work with your Search field.

NOTE: step 2 can be made automatically by using the specifically provided admin tool.
