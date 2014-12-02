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



  Mat4.add = function(out, b, a) {
    out[0]  = a[0]  + b[0];
    out[1]  = a[1]  + b[1];
    out[2]  = a[2]  + b[2];
    out[3]  = a[3]  + b[3];
    out[4]  = a[4]  + b[4];
    out[5]  = a[5]  + b[5];
    out[6]  = a[6]  + b[6];
    out[7]  = a[7]  + b[7];
    out[8]  = a[8]  + b[8];
    out[9]  = a[9]  + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
  };

  Mat4.multiply = function(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    out[0] = a00*b[0] + a01*b[4] + a02*b[8]  + a03*b[12];
    out[1] = a00*b[1] + a01*b[5] + a02*b[9]  + a03*b[13];
    out[2] = a00*b[2] + a01*b[6] + a02*b[10] + a03*b[14];
    out[3] = a00*b[3] + a01*b[7] + a02*b[11] + a03*b[15];

    return out;
  };




  Mat4.toQuat = function(Q, M) {
    return Q;
  };

  return Mat4;
}));