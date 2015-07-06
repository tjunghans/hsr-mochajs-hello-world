/*globals mocha, chai, describe, it, add, isPalindrome, gcd, lcd,
  formatDate, formatCurrency, thousands */
(function () {
  'use strict';

  mocha.traceIgnores = ['mocha.js', 'chai.js'];
  mocha.setup('bdd');
  var assert = chai.assert;

  describe('Math', function () {
    it('adds arguments together', function () {
      assert.equal(add(1, 2), 3);
      assert.equal(add('1', '2'), 3);
      assert.equal(add(1, 2, 3, 4, 5, 6), 21);
    });
  });

  describe('Palindrome', function () {
    it('recognizes a single letter as palindrom', function () {
      assert(isPalindrome('a'));
    });

    it('ignores empty strings and undefined', function () {
      assert.equal(isPalindrome(''), false);
      assert.equal(isPalindrome(undefined), false);
    });

    it('recognizes 2 letter palindrome', function () {
      assert(isPalindrome('bB '));
    });

    it('recognizes n letter palindromes', function () {
      assert(isPalindrome('Eve'));
      assert(isPalindrome('ABBA'));
      assert(isPalindrome('Rotor'));
      assert(isPalindrome('Lagerregal'));
      assert(isPalindrome('Was it a car or a cat I saw?'));
    });

    it('recognizes non palindrome', function () {
      assert.equal(isPalindrome('foo'), false);
    });
  });

  describe('greatest common denominator', function () {
    it('determines gcd of two numbers', function () {
      assert.equal(gcd(12, 12), 12);
      assert.equal(gcd(12, 18), 6);
      assert.equal(gcd(15, 9), 3);
      assert.equal(gcd(81, 144), 9);
    });
  });

  describe('lowest common denominator', function () {
    it('determines lcd of two numbers', function () {
      assert.equal(lcd(12, 18), 36);
      assert.equal(lcd(3, 4), 12);
    });
  });

  describe('format date', function () {
    it('converts date to iso', function () {
      assert.equal(formatDate('30.08.2015'), '2015-08-30');
      assert.equal(formatDate('01.08'), '01.08');
    });
  });

  describe('adds thousands separator to number', function () {
    it('adds separator', function () {
      assert.equal(thousands(1), "1");
      assert.equal(thousands(100), "100");
      assert.equal(thousands(1000), "1'000");
      assert.equal(thousands(10000), "10'000");
      assert.equal(thousands(100000), "100'000");
      assert.equal(thousands(1000000), "1'000'000");
      assert.equal(thousands(10000000), "10'000'000");
      assert.equal(thousands(100000000), "100'000'000");
    });

    it('ignores decimals', function () {
      assert.equal(thousands(1000.57), "1'000.57");
    });
  });

  describe('format currency', function () {
    it('adds 1000s separator', function () {
      assert.equal(formatCurrency(1), "1.00");
      assert.equal(formatCurrency(10), "10.00");
      assert.equal(formatCurrency(100), "100.00");
      assert.equal(formatCurrency(1000), "1'000.00");
      assert.equal(formatCurrency(10000), "10'000.00");
      assert.equal(formatCurrency('10000000'), "10'000'000.00");
    });

    it('adds & formats decimals', function () {
      assert.equal(formatCurrency(0.5), "0.50");
      assert.equal(formatCurrency(1.5), "1.50");
      assert.equal(formatCurrency(1.05), "1.05");
      assert.equal(formatCurrency(1.056), "1.056");
      assert.equal(formatCurrency(1), "1.00");
    });

    it('prefixes ccy if available', function () {
      assert.equal(formatCurrency(1000, 'CHF'), "CHF 1'000.00");
    });

    it('ignores non numeric values', function () {
      assert.equal(formatCurrency('foo'), 'foo');
      assert.equal(formatCurrency(''), '');
      assert.equal(formatCurrency(), undefined);
    });
  });

  mocha.run();
}());
