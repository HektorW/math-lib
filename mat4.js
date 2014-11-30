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

  Mat4.identity = function(M) {
    M[0]  = 1; M[1]  = 0; M[2]  = 0; M[3]  = 0;
    M[4]  = 0; M[5]  = 1; M[6]  = 0; M[7]  = 0;
    M[8]  = 0; M[9]  = 0; M[10] = 1; M[11] = 0;
    M[12] = 0; M[13] = 0; M[14] = 0; M[15] = 1;

    return M;
  };

  return Mat4;
}));