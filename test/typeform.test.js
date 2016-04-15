'use strict';

var expect = require("chai").expect;
var Typeform = require("../lib/typeform");

describe("Typeform API", function() {
    
    var TypeformAPI = new Typeform('a6f3a83d3fb1ca2fe9aabfb54864e20c0e7e4669');
    
    describe("generate_url()", function() {
       it("Should generate a URL resource.", function(done) {
           
           var url = TypeformAPI.generate_url("forms", {  });
           expect(url).to.match(/^https?:/);
           
           done();
           
       }); 
    }); // end generate_url();
    
    describe("_get()", function() {
       it("should return an array", function(done) {
          
          TypeformAPI._get("forms", {  }, function(body) { 
              expect(body).to.be.an("array");
              done(); 
              
          });

       }); 
    }); // end _get();
    
    describe("getForms()", function() {
       it("should return an array", function(done) {
          
          TypeformAPI.getForms(function(body) { 
              expect(body).to.be.an("array");
              done(); 
              
          });

       }); 
    }); // end getForms()
    
    describe("getFormStructure()", function() {
       it("should return an object", function(done) {
          
          TypeformAPI.getFormStructure("BoulG1",function(body) { 
              expect(body).to.be.an("object");
              console.log(body);
              done(); 
              
          });

       }); 
    }); // end getFormStructure();
    
    describe("getFormResponses()", function() {
       it("should return an object", function(done) {
          
          TypeformAPI.getAllFormResponses("BoulG1",function(body) { 
              expect(body).to.be.an("object");
              console.log(body);
              done(); 
              
          });

       }); 
    }); // end getFormStructure();    
    
    
}); // end describe - Typeform API