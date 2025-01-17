import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let digit = 0;
  let str = n.toString().split("");
  for (let i = 0; i < str.length; i++) {
    let arr = [...str];
    arr.splice(i, 1);
    digit = Math.max(digit, +arr.join(""));
  }
  return digit;
}
