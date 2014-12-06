
module.exports = {

  arraysEqual: function(a, b) {
    if (!a || !b)
      return false;

    if (a === b)
      return true;

    if (a.length !== +a.length || a.length !== b.length)
      return false;

    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }

    return true;
  }

};