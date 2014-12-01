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

  Vec3.copy = function(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    return a;
  };

  Vec3.clone = function(b) {
    var a = new _arrType(3);
    return Vec3.copy(a, b);
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

  Vec3.add = function(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
    return a;
  };

  Vec3.subtract = function(a, b) {
    a[0] -= b[0];
    a[1] -= b[1];
    a[2] -= b[2];
    return a;
  };

  Vec3.multiply = function(a, b) {
    a[0] *= b[0];
    a[1] *= b[1];
    a[2] *= b[2];
    return a;
  };

  Vec3.divide = function(a, b) {
    a[0] /= b[0];
    a[1] /= b[1];
    a[2] /= b[2];
    return a;
  };


  Vec3.cross = function(out, a, b) {
    out[0] = a[1] * b[2] - a[2] * b[1];
    out[1] = a[2] * b[0] - a[0] * b[2];
    out[2] = a[0] * b[1] - a[1] * b[0];
    return out;
  };

  Vec3.dot = function(a, b) {
    return a[0] * b[0] +
           a[1] * b[1] +
           a[2] * b[2];
  };

  Vec3.lerp = function(out, a, b, lerp) {
    out[0] = a[0] + lerp * (b[0] - a[0]);
    out[1] = a[1] + lerp * (b[1] - a[1]);
    out[2] = a[2] + lerp * (b[2] - a[2]);
    return out;
  };

  return Vec3;
}));