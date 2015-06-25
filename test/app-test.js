/*globals mocha, chai, describe, it, add, isPalindrome */
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

  mocha.run();
}());
