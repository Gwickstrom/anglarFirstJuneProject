"use strict";
//Imports
exports.__esModule = true;
//Exports
var SampleClass = (function () {
    function SampleClass() {
    }
    SampleClass.prototype.sampleMethod = function (aStr) {
        return aStr.length();
    };
    return SampleClass;
}()); // Export a class inline.
exports.SampleClass = SampleClass;
exports.NewClassName = SampleClass;
//Alternative
var SampleClass = (function () {
    function SampleClass() {
    }
    SampleClass.prototype.sampleMethod = function (aStr) {
        return aStr.length();
    };
    return SampleClass;
}());
exports.SampleClass = SampleClass;
exports.NewClassName = SampleClass;
//Alternative
var SampleClassA = (function () {
    function SampleClassA() {
    }
    SampleClassA.prototype.SampleMethod = function (aStr) {
        return aStr.length();
    };
    return SampleClassA;
}());
exports.SampleClassA = SampleClassA;
var SampleClassB = (function () {
    function SampleClassB() {
    }
    SampleClassB.prototype.SampleMethod = function (aStr) {
        return aStr.length();
    };
    return SampleClassB;
}());
exports.SampleClassB = SampleClassB;
