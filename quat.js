(function(factory) {
  if (typeof define !== 'undefined' && define.amd)
    define(factory);
  else if (typeof module !== 'undefined')
    module.exports = factory();
  else
    window.Quat = factory();
}(function() {

  var _arrType = typeof Float32Array !== 'undefined' ? Float32Array : Array;

  var Quat = {};


  Quat.create = function() {
    return new _arrType(4);
  };

  Quat.set = function(Q, x, y, z, w) {
    Q[0] = x;
    Q[1] = y;
    Q[2] = z;
    Q[3] = w;
    return Q;
  };

  return Quat;
}));