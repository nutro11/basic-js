import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const result = [];
  for (let m = 0; m < matrix.length; m++) {
    result.push([...matrix[m]]);
  }
  for (let k = 0; k < matrix.length; k++) {
    for (let l = 0; l < matrix[k].length; l++) {
      result[k][l] = 0;
      for (let i = k - 1; i <= 1; i++) {
        if (matrix[i]) {
          for (let j = l - 1; j <= 1; j++) {
            if (matrix[i][j]) {
              if ((i !== k || j !== l) && matrix[i][j]) {
                result[k][l] += 1;
              }
            }
          }
        }
      }
    }
  }
  return result;
}
