function formatDate(value) {
  var regex = /^(\d{2})\.(\d{2})\.(\d{4})$/g;
  var matches = regex.exec(value);
  if (matches && matches.length === 4) {
    return matches[3] + '-' + matches[2] + '-' + matches[1];
  }
  return value;
}

function thousands(value) {
  var SIZE = 3;
  var parts = String(value).split('.');
  var number = parts[0];
  var dec = parts.length === 2 ? '.' + parts[1] : ''
  var formatted = '';
  var i;
  var len = number.length;
  for (i = 0; i < len; i++) {
    if (len > SIZE && i > 0 && !((len - i) % SIZE)) {
      formatted += '\'';
    }
    formatted += number[i];
  }
  return formatted + dec;
}
