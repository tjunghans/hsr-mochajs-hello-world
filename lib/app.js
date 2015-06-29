'use strict';

function add() {
  var sum = 0;
  var i;
  var len = arguments.length;
  for (i = 0; i < len; i++) {
    sum += Number(arguments[i]);
  }
  return sum;
}

/**
 * https://en.wikipedia.org/wiki/Palindrome
 */
function isPalindrome(word) {
  if (!word || word.trim() === '') {
    return false;
  }

  word = word.toLowerCase().trim().replace(/[^\w]/g, '');
  var len = word.length;

  if (len === 1) {
    return true;
  }
  if (word[0] === word[word.length - 1]) {
    if (len === 2) { return true; }
    return isPalindrome(word.substr(1, word.length - 2));
  }

  return false;
}

// https://de.wikipedia.org/wiki/Gr%C3%B6%C3%9Fter_gemeinsamer_Teiler
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// https://de.wikipedia.org/wiki/Kleinstes_gemeinsames_Vielfaches
function lcd(a, b) {
  return (a * b) / gcd(a, b);
}
