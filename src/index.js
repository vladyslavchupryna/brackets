module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) {
    return false;
  }

  const pairs = bracketsConfig.reduce((obj, curr) => {
    obj[curr[0]] = curr[1];
    return obj;
  }, {});

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];

    if (bracket in pairs) {
      if (bracket === pairs[bracket] && bracket === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (bracket === pairs[stack[stack.length - 1]]) {
        stack.pop();
      }
    }
  }
  return !stack.length;
};
