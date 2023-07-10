const dictionary = require("jsdoc/lib/jsdoc/tag/dictionary");

// Define the custom tags
dictionary.defineTag("@component", {
  mustHaveValue: false,
  canHaveName: false,
  canHaveType: false,
  onTagged(doclet, tag) {
    // Handle the custom tag here
    doclet.customComponent = true;
  },
});

dictionary.defineTag("@page", {
  mustHaveValue: false,
  canHaveName: false,
  canHaveType: false,
  onTagged(doclet, tag) {
    // Handle the custom tag here
    doclet.customPage = true;
  },
});

dictionary.defineTag("@function", {
  mustHaveValue: false,
  canHaveName: false,
  canHaveType: false,
  onTagged(doclet, tag) {
    // Handle the custom tag here
    doclet.customFunction = true;
  },
});
