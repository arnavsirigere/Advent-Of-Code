function solve(pswd) {
  while (!validPswd(pswd)) {
    pswd = incrementStr(pswd);
  }
  return pswd;
}

function incrementStr(str) {
  const len = str.length;
  if (str.charAt(len - 1) == 'z') {
    const incrementByChar = (s, i) => {
      if (str.charAt(i) != 'z') {
        return s;
      }
      return incrementByChar(s.substr(0, i - 1) + (s.charAt(i - 1) == 'z' ? 'z' : String.fromCharCode(s.charCodeAt(i - 1) + 1)) + 'a' + s.substr(i + 1, len), i - 1);
    };
    return incrementByChar(str, len - 1);
  } else {
    return str.substr(0, len - 1) + String.fromCharCode(str.charCodeAt(len - 1) + 1);
  }
}

function validPswd(pswd) {
  const hasNSequentialChars = (str, n) => {
    for (let i = 0; i <= str.length - n; i++) {
      if (str.charCodeAt(i) + 1 == str.charCodeAt(i + 1) && str.charCodeAt(i + 1) + 1 == str.charCodeAt(i + 2)) {
        return true;
      }
    }
    return false;
  };
  const matches = pswd.match(/(\w)\1/g);
  return !/[iol]/.test(pswd) && matches?.length >= 2 && hasNSequentialChars(pswd, 3);
}

module.exports = { solve, incrementStr, validPswd, delimiter: ' ' };
