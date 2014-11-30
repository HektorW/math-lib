(function(factory) {
  if (typeof define !== 'undefined' && define.amd)
    define(factory);
  else if (typeof module !== 'undefined')
    module.exports = factory();
  else
    window.Vec3 = factory();
}(function() {

  var _arrType = typeof Float32Array !== 'undefined' ? Float32Array : Array;

  var Vec3 = {};


  // Constants
  Vec3.UP = Vec3.set(Vec3.create(), 0, 1, 0);
  Vec3.RIGHT = Vec3.set(Vec3.create(), 1, 0, 0);
  Vec3.FORWARD = Vec3.set(Vec3.create(), 0, 0, 1);

  Vec3.create = function() {
    return new _arrType(3);
  };

  Vec3.fromvalues = function(x, y, z) {
    var V = new _arrType(3);
    V[0] = x;
    V[1] = y;
    V[2] = z;
    return V;
  };

  Vec3.copy = function(V, B) {
    V[0] = B[0];
    V[1] = B[1];
    V[2] = B[2];
    return V;
  };

  Vec3.clone = function(B) {
    var V = new _arrType(3);
    return Vec3.copy(V, B);
  };

  Vec3.set = function(V, x, y, z) {
    V[0] = x;
    V[1] = y;
    V[2] = z;
    return V;
  };

  Vec3.scale = function(V, s) {
    V[0] *= s;
    V[1] *= s;
    V[2] *= s;
    return V;
  };


  Vec3.length = function(V) {
    return Math.sqrt(
      V[0] * V[0] +
      V[1] * V[1] +
      V[2] * V[2]
    );
  };

  Vec3.normalize = function(V) {
    var l = Vec3.length(V);
    V[0] /= l;
    V[1] /= l;
    V[2] /= l;
    return V;
  };

  Vec3.add = function(V, B) {
    V[0] += B[0];
    V[1] += B[1];
    V[2] += B[2];
    return V;
  };

  Vec3.subtract = function(V, B) {
    V[0] -= B[0]; V[1] -= B[1]; V[2] -= B[2];
    return V;
  };

  Vec3.multiply = function(V, B) {
    V[0] *= B[0];
    V[1] *= B[1];
    V[2] *= B[2];
    return V;
  };

  Vec3.divide = function(V, B) {
    V[0] /= B[0];
    V[1] /= B[1];
    V[2] /= B[2];
    return V;
  };


  Vec3.cross = function(OUT, V, B) {
    OUT[0] = V[1] * B[2] - V[2] * B[1];
    OUT[1] = V[2] * B[0] - V[0] * B[2];
    OUT[2] = V[0] * B[1] - V[1] * B[0];
    return OUT;
  };

  Vec3.dot = function(V, B) {
    return V[0] * B[0] +
           V[1] * B[1] +
           V[2] * B[2];
  };

  return Vec3;
}));