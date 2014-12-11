
module.exports = {

  repeatValue: function(value, length) {
    var a = new Array(length);
    while(length--) a[length] = value;
    return a;
  }

};