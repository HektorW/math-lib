
var util = require('./utils.js');

var Mat4 = require('../src/mat4.js');
var Vec3 = require('../src/vec3.js');


describe('Mat4 tests', function() {
  var zero, identity, matA, matB, out, result;

  beforeEach(function() {
    zero = [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ];

    out = [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ];

    identity = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];
  });

  // Create
  describe('Create Mat4', function() {
    beforeEach(function() { result = Mat4.create(); });

    it('should create a 16 element array initialized to a 4x4 zero val Mat4', function() {
      expect(result).toBe(zero);
      expect(result.length).toBe(16);
    });
  });


  // From values
  describe('Create Mat4 from values', function() {
    beforeEach(function() {
      result = Mat4.fromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      matA = Mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    });

    it('should create a new Mat4 with values supplied', function() {
      expect(result).toBeEqualish(identity);
      expect(matA).toBeEqualish([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });
  });
});