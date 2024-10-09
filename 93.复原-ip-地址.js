/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let str = s;
  const dotIndex = [1, 3, 5];
  const result = [];

  const insertDot = function (string, dots) {
    dots.forEach((i) => {
      string = string.slice(0, i) + "." + string.slice(i);
    });
    return string;
  };

  const isValidIp = function (string) {
    return string.split(".").every((item) => {
      if ((item !== "0" && item.startsWith("0")) || !item) return false;
      var val = +item;
      if (val !== val || val > 255) return false;
      return true;
    });
  };

  while (true) {
    str = insertDot(s, dotIndex);
    if (isValidIp(str)) {
      result.push(str);
    }
    //update dotIndex
    dotIndex[2]++;
    if (dotIndex[2] > s.length + 1) {
      dotIndex[1]++;
      dotIndex[2] = dotIndex[1] + 2;
    }
    if (dotIndex[1] > s.length - 1) {
      dotIndex[0]++;
      dotIndex[1] = dotIndex[0] + 2;
      dotIndex[2] = dotIndex[1] + 2;
    }
    if (dotIndex[0] > s.length - 3) {
      return result;
    }

    str = s;
  }
};
// @lc code=end
