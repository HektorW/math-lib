#!/usr/bin/env node

var fs = require('fs');
var _ = require('underscore');

var nodeunit = require('nodeunit');
var assert = nodeunit.assert;
var reporter = nodeunit.reporters.default;


// Extend test suite with custom equal functions
_.extend(assert, {

  arraysEqual: function arraysEqual(actual, expected, message) {
    var fail = assert.fail.bind(assert, actual, expected, message, 'arraysEqual', assert.arraysEqual);

    if (!actual || !expected)
      fail();
    if (actual.length !== +actual.length || actual.length !== expected.length)
      fail();

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i])
        fail();
    }
  },

  notArraysEqual: function notArraysEqual(actual, expected, message) {
    var fail = assert.fail.bind(assert, actual, expected, message, 'notArraysEqual', assert.notArraysEqual);

    if (!actual || !expected) fail();

    if (actual === expected) fail();
    
    if (actual.length !== expected.length) return; // pass

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return; // pass
    }

    fail();
  },

  nearlyEquals: function nearlyEquals(actual, expected, message) {
    // TODO: test for correctness
    var fail = assert.fail.bind(assert, actual, expected, message, 'nearlyEquals', assert.nearlyEquals);

    var EPSILON = 0.000001;

    if (actual === expected) return;

    var absA = Math.abs(actual);
    var absB = Math.abs(expected);
    var diff = Math.abs(absA - absB);

    if (diff / (absA + absB) > EPSILON) fail();
  }

});


process.chdir('test');


var tests = _.filter(fs.readdirSync('.'), function(filename) {
  return filename.indexOf('.test.js') === (filename.length - '.test.js'.length);
});


console.log(function() {/*
#######
# Math-lib Tests, {date}
#######
*/}.toString().split('\n').slice(1, -1).join('\n').replace('{date}', new Date().toString()));


reporter.run(tests);