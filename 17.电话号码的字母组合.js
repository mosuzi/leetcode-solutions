/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  let code = "a".charCodeAt(0);
  const mapping = Array.from(Array(8), (v, k) => k + 2).reduce((p, c) => {
    if (c === 7 || c === 9) {
      p["" + c] = [
        String.fromCharCode(code),
        String.fromCharCode(code + 1),
        String.fromCharCode(code + 2),
        String.fromCharCode(code + 3),
      ];
      code += 4;
    } else {
      p["" + c] = [
        String.fromCharCode(code),
        String.fromCharCode(code + 1),
        String.fromCharCode(code + 2),
      ];
      code += 3;
    }
    return p;
  }, {});

  const strArr = digits.split("").map(c => mapping[c]);
  const strArrIndex = strArr.map(_ => 0)
  const ans = []
  while(true) {
    ans.push(strArr.map((a, i) => a[strArrIndex[i]]).join(''))
    let i = strArrIndex.length - 1
    strArrIndex[i]++
    while (strArrIndex[i] >= strArr[i].length) {
      strArrIndex[i] = 0
      i--
      if (i < 0) {
        return ans
      }
      strArrIndex[i]++
    }
  }
};
// @lc code=end
