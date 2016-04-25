# typeform-node-api
The UNOFFICIAL node.js wrapper for the typeform API.

This Node.js module works with the popular form creation service Typeform - https://www.typeform.com/ - use your
API key with the module to list your forms, and access responses.

## Install
```
npm install typeform-node-api
```

## Usage

Require typeform module and instantiate new object.
```js
// import typeform module
var Typeform = require('typeform-node-api');
// create new instance of Typeform object.
var typeform_api = new Typeform('api_key');
```

___

## Methods

Get a response that lists typeforms we have access to:
```js
typeform_api.getForms(function(data) {
    // data now contains an array of objects with all your forms.
    // [ { id: 'B1ulG1', name: 'Registration Form' }, { id: 'WZRt5l', name: 'Contact Form' } ]
});
```


Get a response that details specific information about a form:
```js
typeform_api.getFormStructure(function('FORM_ID',data) {
    // data now contains a object with details about your form
    // { uid: 'BoulG1', fields: [ { id: 'textfield_20678701', type: 'textfield', question: 'What\'s your name?' }] }
});
```


Get a response that lists complete and incomplete form responses.
```js
typeform_api.getFormResponses(function('FORM_ID',data) {
    // data now contains a object with form responses.
});
```


Get a response that lists complete form responses.
```js
typeform_api.getCompletedFormResponses(function('FORM_ID',data) {
    // data now contains a object with form responses.
});
```


Get a response that lists incomplete form responses.
```js
typeform_api.getIncompleteFormResponses(function('FORM_ID',data) {
    // data now contains a object with form responses.
});
```