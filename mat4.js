(function(factory) {
  if (typeof define !== 'undefined' && define.amd)
    define(factory);
  else if (typeof module !== 'undefined')
    module.exports = factory();
  else
    window.Mat4 = factory();
}(function() {

  var _arrType = typeof Float32Array !== 'undefined' ? Float32Array : Array;

  var Mat4 = {};


  Mat4.create = function() {
    return Mat4.identity(new _arrType(16));
  };

  Mat4.copy = function(a, b) {
    a[0]  = b[0];  a[1]  = b[1];  a[2]  = b[2];  a[3]  = b[3];
    a[4]  = b[4];  a[5]  = b[5];  a[6]  = b[6];  a[7]  = b[7];
    a[8]  = b[8];  a[9]  = b[9];  a[10] = b[10]; a[11] = b[11];
    a[12] = b[12]; a[13] = b[13]; a[14] = b[14]; a[15] = b[15];
    return a;
  };

  Mat4.clone = function(b) {
    return Mat4.copy(Mat4.create(), b);
  };

  Mat4.identity = function(M) {
    M[0]  = 1; M[1]  = 0; M[2]  = 0; M[3]  = 0;
    M[4]  = 0; M[5]  = 1; M[6]  = 0; M[7]  = 0;
    M[8]  = 0; M[9]  = 0; M[10] = 1; M[11] = 0;
    M[12] = 0; M[13] = 0; M[14] = 0; M[15] = 1;

    return M;
  };


  Mat4.multiply = Mat4.mul = function(out, a, b) {
    return out;
  };


  Mat4.toQuat = function(Q, M) {
    return Q;
  };

  return Mat4;
}));