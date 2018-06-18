let should = require('should');
let vm = require('vm');
let fs = require('fs');
let filename = __filename.replace(/\.test\.js$/, '.js');
let testFunction = require(filename);

describe('palindrome', function() {
    it('should exist', function(){
        should.exist(filename);
    });

    it('should be a function', function() {
        testFunction.should.be.a.Function;
    });

    it('should return a boolean', function() {
        let result = testFunction('hello');
        should.exist(result);
        result.should.be.an.instanceof(Boolean);
    });

    it('should return false if no input provided', function() {
        let result = testFunction();
        result.should.be.eql(false);
    });

    it('should return true for a single character', function(){
        let result = testFunction('a');
        result.should.be.eql(true);
    });

    it('should remove spaces and punctuation to create palindrome', function(){
        let result = testFunction('able was I! ere I saw elba');
        result.should.be.eql(true);
    });

    it('should work with input string of numbers', function() {
        let result = testFunction('707');
        result.should.be.eql(true);
    });

    it('should not let case of characters impact creation of palindrome', function(){
        let result = testFunction('RaceCAr');
        result.should.be.eql(true);
    });

});

