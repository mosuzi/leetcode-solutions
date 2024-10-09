/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramsSet = {};
  const getId = function (str) {
    const allChars = str.split("");
    allChars.sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });
    return allChars.join(',')
  };
  for (let i = 0; i < strs.length; i++) {
    const id = getId(strs[i]);
    if (anagramsSet[id]) anagramsSet[id].push(strs[i]);
    else {
      anagramsSet[id] = [strs[i]];
    }
  }
  return Object.values(anagramsSet);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end