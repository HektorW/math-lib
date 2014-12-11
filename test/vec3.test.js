
var util = require('./utils.js');

var Vec3 = require('../src/vec3.js');


// Create
exports.Create = function(test) {
  var t = [0, 0, 0];
  var v = Vec3.create();

  test.strictEqual(v.length, 3, 'Length of created Vec3 is 3');
  test.strictEqual(v.length, t.length, 'Length of created Vec3 is the same as array t=[0, 0, 0]');
  test.arraysEqual(v, t, 'Created Vec3 has values [0, 0, 0]');

  test.done();
};

// Create from values
exports.Fromvalues = function(test) {

  test.strictEqual(Vec3.fromValues(0, 0, 0).length, 3, 'Creating Vec3 with 3 values give array of length 3');
  test.strictEqual(Vec3.fromValues(0, 0, 0, 0).length, 3, 'Creating Vec3 with 4 values give array of length 3');

  test.arraysEqual(Vec3.fromValues(1, 3, 4), [1, 3, 4], 'Creating Vec3 with values (1, 3, 4) gives array [1, 3, 4]');
  test.notArraysEqual(Vec3.fromValues(1, 3, 4), [1, 3, 4, 5], 'Creating Vec3 with values doesn\'t equal a array with length bigger than 3');
  test.notArraysEqual(Vec3.fromValues(1, 3, 4, 5), [1, 3, 4, 5], 'Creating Vec3 with values doesn\'t equal a array with length bigger than 3');

  test.done();
};

// Copy
exports.Copy = function(test) {
  var v = Vec3.fromValues(1, 4, 5);
  var copy = Vec3.copy(Vec3.create(), v);

  test.arraysEqual(copy, v, 'Copy of Vec3 v has same values as v');
  test.notStrictEqual(copy, v, 'Copy of Vec3 v is not strict equal to v');

  test.done();
};

// Clone
exports.Clone = function(test) {
  var v = Vec3.fromValues(1, 4, 5);
  var clone = Vec3.clone(v);

  test.arraysEqual(clone, v, 'Clone of Vec3 v has same values as v');
  test.notStrictEqual(clone, v, 'Clone of Vec3 v is not strict equal to v');

  test.done();
};

// Set
exports.Set = function(test) {
  var v = Vec3.create();

  test.arraysEqual(Vec3.set(v, 1, 4, 5), [1, 4, 5]);
  test.notArraysEqual(Vec3.set(v, 1, 4, 5), [1, 4, 5, 7]);
  test.notArraysEqual(Vec3.set(v, 1, 4, 5, 7), [1, 4, 5, 7]);
  test.strictEqual(Vec3.set(v, 0, 0, 0), v, 'Setting value returns same array');

  test.done();
};

// Scale
exports.Scale = function(test) {
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
exports.Length = function(test) {

  test.equal(Vec3.length(Vec3.fromValues(1, 0, 0)), 1, '[1, 0, 0]');
  test.equal(Vec3.length(Vec3.fromValues(0, 0, 0)), 0, '[0, 0, 0]');
  test.equal(Vec3.length(Vec3.fromValues(2, 2, -1)), 3, '[2, 2, -1]');
  test.nearlyEquals(Vec3.length(Vec3.fromValues(1, 1, 1)), 1.7320508075688772, '[1, 1, 1]');
  test.nearlyEquals(Vec3.length(Vec3.fromValues(3, 2, -1)), 3.74166, '[3, 2, -1]');

  test.done();
};

// Length squared
exports.LengthSquared = function(test) {

  test.equal(Vec3.lengthSquared(Vec3.fromValues(0, 0, 0)), 0, '[0, 0, 0]');
  test.equal(Vec3.lengthSquared(Vec3.fromValues(1, 0, 0)), 1, '[1, 0, 0]');
  test.equals(Vec3.lengthSquared(Vec3.fromValues(3, 2, -1)), 14, '[3, 2, -1]');
  var v = Vec3.fromValues(1, 1, 1);
  test.nearlyEquals(Math.pow(Vec3.length(v), 2), Vec3.lengthSquared(v), 'Vec3.length^2 == Vec3.lengthSquared');
  test.nearlyEquals(Math.sqrt(Vec3.lengthSquared(v)), Vec3.length(v), 'sqrt(Vec3.lengthSquared) == Vec3.length');

  test.done();
};

// Distance
exports.Distance = function(test) {

  var v = Vec3.fromValues(1, 1, 1);
  var u = Vec3.fromValues(0, 0, 0);

  test.equals(Vec3.distance(u, v), Vec3.distance(v, u), 'distance returns same result in both orders');
  test.equals(Vec3.distance(u, v), Vec3.length(v), 'distance from [0, 0, 0] to [1, 1, 1] is same as length of [1, 1, 1]');
  test.equals(Vec3.distance(v, v), 0, 'distance between one vector is 0');

  Vec3.set(v, 3, 4, 5);
  Vec3.set(u, 6, 1, 3);
  test.nearlyEquals(Vec3.distance(v, u), 4.69041575982343, '[3, 4, 5] -> [6, 1, 3]');
  
  test.done();
};

// Distance squared
/*exports.DistanceSquared = function(test) {
  test.ok(false, 'vec3DistanceSquared tests not written');

  test.done();
};*/