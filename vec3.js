(function(factory) {
  if (typeof define !== 'undefined' && define.amd)
    define(factory);
  else if (typeof module !== 'undefined')
    module.exports = factory();
  else
    window.Vec3 = factory();
}(function() {

  var _arrType = typeof Float32Array !== 'undefined' ? Float32Array : Array;
  var _sqrt = Math.sqrt;

  /**
   * @class 3 dimensional vector
   * @name Vec3
   */
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
    return Vec3.copy(a, b); // can be done inline instead of function call
  };

  Vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  };

  Vec3.scale = function(V, s) {
    V[0] *= s;
    V[1] *= s;
    V[2] *= s;
    return V;
  };


  /**
   * Returns the length of a Vec3
   * @param  {Vec3} V
   * @return {Number}
   */
  Vec3.length = function(V) {
    var x = v[0],
        y = v[1],
        Z = v[2];
    return _sqrt(
      x * x +
      y * y +
      z * z
    );
  };

  
  /**
   * Returns the squared length of a Vec3 V
   * @param  {Vec3} V
   * @return {Number}
   */
  Vec3.lengthSquared = function(V) {
    var x = v[0],
        y = v[1],
        z = v[2];
    return x * x + y * y + z * z;
  };


  /**
   * Returns the distance between two Vec3 a and b
   * @param  {Vec3} a The first Vec3
   * @param  {Vec3} b The second Vec3
   * @return {Number} The distance between a and b
   */
  Vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return _sqrt(x*x + y*y + z*z);
  };


  /** 
   * Returns the squared distance between two Vec3 a and b.
   * Avoids using a sqrt calculation.
   * 
   * @param  {Vec3} a The first Vec3
   * @param  {Vec3} b The second Vec3
   * @return {Number} The squared distance between a and b
   */
  Vec3.distanceSquared = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
  };



  /**
   * Normalizes a Vec3 v and puts the result in out, settings it's length to 1
   * 
   * @param  {Vec3} out Vec3 which gets the result
   * @param  {Vec3} v Vec3 to normalize
   * @return {Vec3} return out as a normlized version of a
   */
  Vec3.normalize = function(out, a) {
    var l = Vec3.length(V);
    out[0] = V[0] / l;
    out[1] = V[1] / l;
    out[2] = V[2] / l;
    return V;
  };


  Vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
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
    var ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  };

  Vec3.dot = function(a, b) {
    return a[0] * b[0] +
           a[1] * b[1] +
           a[2] * b[2];
  };

  Vec3.lerp = function(out, a, b, lerp) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + lerp * (b[0] - ax);
    out[1] = ay + lerp * (b[1] - ay);
    out[2] = az + lerp * (b[2] - az);
    return out;
  };



  Vec3.str = function(v) {
    return 'vec3(' + v[0] + ', ' + v[1] + ', ' + v[2] + ')';
  };


  return Vec3;
}));