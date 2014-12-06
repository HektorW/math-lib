
var util = require('./utils.js');

var Mat4 = require('../src/mat4.js');
var Vec3 = require('../src/vec3.js');



exports.mat4Create = function(test) {
  var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var m = Mat4.create();

  test.ok(m.length === 16, 'Length of created Mat4 is 16');
  test.ok(m.length === t.length, 'Length of created Mat4 is the same as array t');
  test.ok(util.arraysEqual(m, t), 'Created Mat4 has values [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]');


  test.done();
};
