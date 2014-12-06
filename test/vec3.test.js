
var util = require('./utils.js');

var Vec3 = require('../src/vec3.js');


// Create
exports.vec3Create = function(test) {
  var t = [0, 0, 0];
  var v = Vec3.create();

  test.strictEqual(v.length, 3, 'Length of created Vec3 is 3');
  test.strictEqual(v.length, t.length, 'Length of created Vec3 is the same as array t=[0, 0, 0]');
  test.arraysEqual(v, t, 'Created Vec3 has values [0, 0, 0]');

  test.done();
};

// Create from values
exports.vec3Fromvalues = function(test) {

  test.strictEqual(Vec3.fromValues(0, 0, 0).length, 3, 'Creating Vec3 with 3 values give array of length 3');
  test.strictEqual(Vec3.fromValues(0, 0, 0, 0).length, 3, 'Creating Vec3 with 4 values give array of length 3');

  test.arraysEqual(Vec3.fromValues(1, 3, 4), [1, 3, 4], 'Creating Vec3 with values (1, 3, 4) gives array [1, 3, 4]');
  test.notArraysEqual(Vec3.fromValues(1, 3, 4), [1, 3, 4, 5], 'Creating Vec3 with values doesn\'t equal a array with length bigger than 3');
  test.notArraysEqual(Vec3.fromValues(1, 3, 4, 5), [1, 3, 4, 5], 'Creating Vec3 with values doesn\'t equal a array with length bigger than 3');

  test.done();
};

// Copy
exports.vec3Copy = function(test) {
  var v = Vec3.fromValues(1, 4, 5);
  var copy = Vec3.copy(Vec3.create(), v);

  test.arraysEqual(copy, v, 'Copy of Vec3 v has same values as v');
  test.notStrictEqual(copy, v, 'Copy of Vec3 v is not strict equal to v');

  test.done();
};

// Clone
exports.vec3Clone = function(test) {
  var v = Vec3.fromValues(1, 4, 5);
  var clone = Vec3.clone(v);

  test.arraysEqual(clone, v, 'Clone of Vec3 v has same values as v');
  test.notStrictEqual(clone, v, 'Clone of Vec3 v is not strict equal to v');

  test.done();
};

// Set
exports.vec3Set = function(test) {
  var v = Vec3.create();

  test.arraysEqual(Vec3.set(v, 1, 4, 5), [1, 4, 5]);
  test.notArraysEqual(Vec3.set(v, 1, 4, 5), [1, 4, 5, 7]);
  test.notArraysEqual(Vec3.set(v, 1, 4, 5, 7), [1, 4, 5, 7]);
  test.strictEqual(Vec3.set(v, 0, 0, 0), v, 'Setting value returns same array');

  test.done();
};

// Scale
exports.vec3Scale = function(test) {
  var v;

  v = Vec3.fromValues(1, 3, 4);
  test.arraysEqual(Vec3.scale(v, v, 1), Vec3.fromValues(1, 3, 4));
  v = Vec3.fromValues(1, 3, 4);
  test.arraysEqual(Vec3.scale(v, v, 1), [1, 3, 4]);
  v = Vec3.fromValues(1, 3, 4);
  test.arraysEqual(Vec3.scale(v, v, 2), [2, 6, 8]);
  v = Vec3.fromValues(1, 3, 4);
  test.arraysEqual(Vec3.scale(v, v, -1), [-1, -3, -4]);
  v = Vec3.fromValues(1, 3, 4);
  test.arraysEqual(Vec3.scale(v, v, 10), [10, 30, 40]);

  test.done();
};


// Length
exports.vec3Length = function(test) {

  test.equal(Vec3.length(Vec3.fromValues(1, 0, 0)), 1, '[1, 0, 0]');
  test.equal(Vec3.length(Vec3.fromValues(0, 0, 0)), 0, '[0, 0, 0]');
  test.equal(Vec3.length(Vec3.fromValues(2, 2, -1)), 3, '[2, 2, -1]');
  test.nearlyEquals(Vec3.length(Vec3.fromValues(1, 1, 1)), 1.7320508075688772, '[1, 1, 1]');
  test.nearlyEquals(Vec3.length(Vec3.fromValues(3, 2, -1)), 3.74166, '[3, 2, -1]');

  test.done();
};

exports.vec3LengthSquared = function(test) {

  test.equal(Vec3.lengthSquared(Vec3.fromValues(0, 0, 0)), 0, '[0, 0, 0]');
  test.equal(Vec3.lengthSquared(Vec3.fromValues(1, 0, 0)), 1, '[1, 0, 0]');
  test.equals(Vec3.lengthSquared(Vec3.fromValues(3, 2, -1)), 14, '[3, 2, -1]');

  test.done();
};