/*globals mocha, chai, describe, it, add, isPalindrome, gcd, lcd */
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

  describe("greatest common denominator", function () {
    it("determines gcd of two numbers", function () {
      assert.equal(gcd(12, 12), 12);
      assert.equal(gcd(12, 18), 6);
      assert.equal(gcd(15, 9), 3);
      assert.equal(gcd(81, 144), 9);
    });
  });

  describe("lowest common denominator", function () {
    it("determines lcd of two numbers", function () {
      assert.equal(lcd(12, 18), 36);
      assert.equal(lcd(3, 4), 12);
    });
  });

  mocha.run();
}());
