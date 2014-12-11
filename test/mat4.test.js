
var util = require('./utils.js');

var Mat4 = require('../src/mat4.js');
var Vec3 = require('../src/vec3.js');


// Create
exports.Create = function(test) {
  var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var m = Mat4.create();

  test.equals(m.length, 16, 'Length of created Mat4 is 16');
  test.equals(m.length, t.length, 'Length of created Mat4 is the same as array t');
  test.arraysEqual(m, t, 'Created Mat4 has values [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]');


  test.done();
};

// From Values
exports.FromValues = function(test) {
  var m = Mat4.create();
  Mat4.set(m, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  var n = Mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

  test.arraysEqual(m, n, 'FromValues and Set gives same result');
  test.arraysEqual(m, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);


  test.done();
};

// Copy
exports.Copy = function(test) {

  var m = Mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  var c = Mat4.copy(Mat4.create(), m);

  test.arraysEqual(c, m, 'Copy of m has same values as m');
  test.notStrictEqual(c, m, 'Copy of m is not strict equal to m');
  test.notEqual(c, m, 'Copy of m is not equal to m');

  test.done();
};

// Identity
exports.Identity = function(test) {
  var m, iden;

  m = Mat4.identity(Mat4.create());
  iden = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

  test.arraysEqual(m, iden);
  Mat4.set(m, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  test.arraysEqual(Mat4.identity(m), iden);

  test.done();
};

// Add
exports.Add = function(test) {
  var m, n, iden;

  m = Mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  n = Mat4.create();
  iden = Mat4.identity(Mat4.create());

  test.arraysEqual(Mat4.add(Mat4.create(), m, n), m, 'Adding newly created mat4 doesn\'t change values');
  test.arraysEqual(Mat4.add(Mat4.create(), m, iden), [2, 2, 3, 4, 5, 7, 7, 8, 9, 10, 12, 12, 13, 14, 15, 17], 'Adding identity to m');

  m = Mat4.fromValues.apply(Mat4, util.repeatValue(1, 16));
  n = Mat4.fromValues.apply(Mat4, util.repeatValue(3, 16));
  test.arraysEqual(Mat4.add(Mat4.create(), m, n), util.repeatValue(4, 16), '1(x16) + 3(x16) => 4(x16)');

  test.done();
};

// Subtract
exports.Subtract = function(test) {
  var m, n, iden;

  m = Mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  n = Mat4.create();
  iden = Mat4.identity(Mat4.create());

  test.arraysEqual(Mat4.subtract(Mat4.create(), m, n), m, 'Subtracting newly created mat4 doesn\'t change values');
  test.arraysEqual(Mat4.subtract(Mat4.create(), m, iden), [0, 2, 3, 4, 5, 5, 7, 8, 9, 10, 10, 12, 13, 14, 15, 15], 'Subtracting identity from m');

  m = Mat4.fromValues.apply(Mat4, util.repeatValue(1, 16));
  n = Mat4.fromValues.apply(Mat4, util.repeatValue(3, 16));
  test.arraysEqual(Mat4.subtract(Mat4.create(), m, n), util.repeatValue(-2, 16), '1(x16) + 3(x16) => -2(x16)');

  test.done();
};

// Multiply
exports.Multiply = function(test) {
  var m, n;

  test.done();
};