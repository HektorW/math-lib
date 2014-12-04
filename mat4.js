(function(factory) {
  if (typeof define !== 'undefined' && define.amd)
    define(factory);
  else if (typeof module !== 'undefined')
    module.exports = factory();
  else
    window.Mat4 = factory();
}(function() {

  var _arrType = typeof Float32Array !== 'undefined' ? Float32Array : Array;

  var _cos = Math.cos;
  var _sin = Math.sin;

  var Mat4 = {};


  Mat4.create = function() {
    return new _arrType(16);
  };

  Mat4.copy = function(out, b) {
    out[0]  = b[0];
    out[1]  = b[1];
    out[2]  = b[2];
    out[3]  = b[3];

    out[4]  = b[4];
    out[5]  = b[5];
    out[6]  = b[6];
    out[7]  = b[7];

    out[8]  = b[8];
    out[9]  = b[9];
    out[10] = b[10];
    out[11] = b[11];

    out[12] = b[12];
    out[13] = b[13];
    out[14] = b[14];
    out[15] = b[15];

    return out;
  };

  Mat4.clone = function(b) {
    return Mat4.copy(Mat4.create(), b);
  };

  Mat4.identity = function(out) {
    out[0]  = 1;
    out[1]  = 0;
    out[2]  = 0;
    out[3]  = 0;

    out[4]  = 0;
    out[5]  = 1;
    out[6]  = 0;
    out[7]  = 0;

    out[8]  = 0;
    out[9]  = 0;
    out[10] = 1;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
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


  Mat4.subtract = function(out, a, b) {
    out[0]  = a[0]  - b[0];
    out[1]  = a[1]  - b[1];
    out[2]  = a[2]  - b[2];
    out[3]  = a[3]  - b[3];

    out[4]  = a[4]  - b[4];
    out[5]  = a[5]  - b[5];
    out[6]  = a[6]  - b[6];
    out[7]  = a[7]  - b[7];

    out[8]  = a[8]  - b[8];
    out[9]  = a[9]  - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];

    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
  };



  /**
   * Multiply two Mat4 a & b to receive result in Mat4 out
   *
   * @param  {Mat4} out Mat4 which gets the result
   * @param  {Mat4} a   First Mat4 operand
   * @param  {Mat4} b   Second Mat4 operand
   * @return {Mat4}     Resulting Mat4 out
   */
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
        a33 = a[15],

        b00 = b[0],
        b01 = b[1],
        b02 = b[2],
        b03 = b[3],
        b10 = b[4],
        b11 = b[5],
        b12 = b[6],
        b13 = b[7],
        b20 = b[8],
        b21 = b[9],
        b22 = b[10],
        b23 = b[11],
        b30 = b[12],
        b31 = b[13],
        b32 = b[14],
        b33 = b[15];

    out[0]  = a00*b00 + a01*b10 + a02*b20 + a03*b30;
    out[1]  = a00*b01 + a01*b11 + a02*b21 + a03*b31;
    out[2]  = a00*b02 + a01*b12 + a02*b22 + a03*b32;
    out[3]  = a00*b03 + a01*b13 + a02*b23 + a03*b33;

    out[4]  = a10*b00 + a11*b10 + a12*b20 + a13*b30;
    out[5]  = a10*b01 + a11*b11 + a12*b21 + a13*b31;
    out[6]  = a10*b02 + a11*b12 + a12*b22 + a13*b32;
    out[7]  = a10*b03 + a11*b13 + a12*b23 + a13*b33;

    out[8]  = a20*b00 + a21*b10 + a22*b20 + a23*b30;
    out[9]  = a20*b01 + a21*b11 + a22*b21 + a23*b31;
    out[10] = a20*b02 + a21*b12 + a22*b22 + a23*b32;
    out[11] = a20*b03 + a21*b13 + a22*b23 + a23*b33;

    out[12] = a30*b00 + a31*b10 + a32*b20 + a33*b30;
    out[13] = a30*b01 + a31*b11 + a32*b21 + a33*b31;
    out[14] = a30*b02 + a31*b12 + a32*b22 + a33*b32;
    out[15] = a30*b03 + a31*b13 + a32*b23 + a33*b33;

    return out;
  };



  Mat4.translate = function(out, m, v) {
    var x = v[0],
        y = v[1],
        z = [v2];

    out[0]  = m[0];
    out[1]  = m[1];
    out[2]  = m[2];
    out[3]  = m[3];

    out[4]  = m[4];
    out[5]  = m[5];
    out[6]  = m[6];
    out[7]  = m[7];

    out[8]  = m[8];
    out[9]  = m[9];
    out[10] = m[10];
    out[11] = m[11];

    // a matrix multiplication with v
    // dot product between v and m[?]
  };

  /**
   * Calculate the transpose of `Mat4` m and put the result in `Mat4`  out
   * @param  {Mat4} out `Mat4` where result is put
   * @param  {Mat4} m   `Mat4` to use as source for transpose
   * @return {Mat4}     Returns out as a transpose of m
   */
  Mat4.transpose = function(out, m) {
    if (out === m) {
      var t1, t2, t3;

      t1 = m[1];
      t2 = m[2];
      t3 = m[3];
      out[1]  = m[4];
      out[2]  = m[8];
      out[3]  = m[12];
      out[4]  = t1;
      out[8]  = t2;
      out[12] = t3;

      t1 = m[6];
      t2 = m[7];
      out[6]  = m[9];
      out[7]  = m[13];
      out[9]  = t1;
      out[13] = t2;

    } else {
      out[0]  = m[0];
      out[1]  = m[4];
      out[2]  = m[8];
      out[3]  = m[12];

      out[4]  = m[1];
      out[5]  = m[5];
      out[6]  = m[9];
      out[7]  = m[13];

      out[8]  = m[2];
      out[9]  = m[6];
      out[10] = m[10];
      out[11] = m[14];

      out[12] = m[3];
      out[13] = m[7];
      out[14] = m[11];
      out[15] = m[15];
    }
  };



  Mat4.toQuat = function(Q, M) {
    return Q;
  };


  /**
   * Returns a string representation of a Mat4 m
   *
   * @param  {Mat4} m Mat4 to show as a string
   * @return {String} String representation of Mat4 m
   */
  Mat4.toString = function(m) {
    return 'Mat4('  + 
        m[0] + ', ' + m[4] + ', ' + m[8]  + ', ' + m[12] +
        m[1] + ', ' + m[5] + ', ' + m[9]  + ', ' + m[13] +
        m[2] + ', ' + m[6] + ', ' + m[10] + ', ' + m[14] +
        m[3] + ', ' + m[7] + ', ' + m[11] + ', ' + m[15] + ')';
  };

  return Mat4;
}));