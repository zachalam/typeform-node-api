'use strict';

/*
 _                     __                       _     
| |                   / _|                     (_)    
| |_ _   _ _ __   ___| |_ ___  _ __ _ __ ___    _ ___ 
| __| | | | '_ \ / _ \  _/ _ \| '__| '_ ` _ \  | / __|
| |_| |_| | |_) |  __/ || (_) | |  | | | | | |_| \__ \
 \__|\__, | .__/ \___|_| \___/|_|  |_| |_| |_(_) |___/
      __/ | |                                 _/ |    
     |___/|_|                                |__/   
     
     
The UNOFFICIAL node.js wrapper for the typeform API.
Author: Zach Alam <www.zachalam.com>
*/

// request module for making http requests.
var request = require('request');
var queryString = require("query-string");

// this is the resource for typeform API.
var TYPEFORM_API_URL = "https://api.typeform.com/v1/";

// API Constructor.
var Typeform = function(api_key) 
{
    // save api key for class methods.
    this.api_key = api_key;
    
};

// export Typeform variable.
module.exports = Typeform;


// generates a URL string which represents the specific location
// we are calling on the typeform API.
Typeform.prototype.generate_url = function(uri,params) {
    
    // add apikey to our params
    params.key = this.api_key;
    // stringify a set of params
    var params_string = queryString.stringify(params);
    // generate and return a URL string
    return TYPEFORM_API_URL + uri + "?" + params_string;
    
};

// this method makes a standard HTTP request and returns
// a callback when data is ready.
Typeform.prototype._get = function(uri,params,callback) {
    var url_to_call = this.generate_url(uri,params);
    
    //console.log(url_to_call);
    
    request.get({
       url: url_to_call,
       json: true
    }, function(error, resp, body) {
        if(!error && resp.statusCode == 200) {
            // successful http request
            callback(body);
        }
        else{
            // an error occured, log error
            console.error(new Error(error));
            callback(null);
        }
    });
    
};

// this method lists all the typeforms that 
// are available under our account.
Typeform.prototype.getForms = function(callback){
    this._get("forms", {}, function(body) { callback(body); });
    
};


// this method returns a given structure of a form
Typeform.prototype.getFormStructure = function(form_id, callback) {
    var uri = "forms/"+form_id;
    this._get(uri, {}, function(body) { callback(body); });
};


// this method returns all form responses
Typeform.prototype.getFormResponses = function(form_id, callback) {
    var uri = "form/"+form_id;
    this._get(uri, {}, function(body) { callback(body); });
};


// this method returns all form responses
Typeform.prototype.getCompletedFormResponses = function(form_id, callback) {
    var uri = "form/"+form_id;
    this._get(uri, { completed: true }, function(body) { callback(body); });
};

// this method returns incomplete form responses
Typeform.prototype.getIncompleteFormResponses = function(form_id, callback) {
    var uri = "form/"+form_id;
    this._get(uri, { completed: false }, function(body) { callback(body); });
};