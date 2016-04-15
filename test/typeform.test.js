'use strict';

var expect = require("chai").expect;
var Typeform = require("../lib/typeform");

describe("Typeform API", function() {
    
    var TypeformAPI = new Typeform('d03b83912ef2aa5b98114c443c9dc628de459caa');
    
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
              console.log(body);
              expect(body).to.be.an("array");
              done(); 
              
          });

       }); 
    }); // end _get();
    
    describe("getForms()", function() {
       it("should return an array", function(done) {
          
          TypeformAPI.getForms(function(body) { 
              expect(body).to.be.an("array");
              console.log(body);
              done(); 
              
          });

       }); 
    }); // end getForms()
    
    describe("getFormStructure()", function() {
       it("should return an object", function(done) {
          
          TypeformAPI.getFormStructure("BoulG1",function(body) { 
              expect(body).to.be.an("object");
              console.log();
              done(); 
              
          });

       }); 
    }); // end getFormStructure();
    
    describe("getFormResponses()", function() {
       it("should return an object", function(done) {
          
          TypeformAPI.getFormResponses("BoulG1",function(body) { 
              expect(body).to.be.an("object");
              console.log(body);
              done(); 
              
          });

       }); 
    }); // end getFormStructure();    
    
    describe("getCompletedFormResponses()", function() {
       it("should return an object", function(done) {
          
          TypeformAPI.getCompletedFormResponses("BoulG1",function(body) { 
              expect(body).to.be.an("object");
              console.log(body);
              done(); 
              
          });

       }); 
    }); // end getFormStructure();    

    describe("getIncompleteFormResponses()", function() {
       it("should return an object", function(done) {
          
          TypeformAPI.getIncompleteFormResponses("BoulG1",function(body) { 
              expect(body).to.be.an("object");
              console.log(body);
              done(); 
              
          });

       }); 
    }); // end getFormStructure();  
    
}); // end describe - Typeform API