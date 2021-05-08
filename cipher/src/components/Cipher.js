export default function caesarShift (text, key) {
  if (key < 0) {
    return caesarShift(text, key + 26);
  }

  let output = '';

  for (let i = 0; i < text.length; i++) {
    let c = text[i];

    if (c.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + key) % 26) + 65);
      }

      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }

    output += c;
  }

  return output;
};
