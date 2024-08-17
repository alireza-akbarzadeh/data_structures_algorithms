// green apple
const findFirstRepeatedValue = (str) => {
  const mapChar = new Map();
  let findCh = null;
  for (const ch of str) {
    if (mapChar.has(ch)) {
      findCh = ch;
      break;
    } else {
      mapChar.set(ch, true);
    }
  }
  return findCh;
};
console.log(findFirstRepeatedValue("green apple"));

const findString = "a green apple";

function findFirstNoneRepeatingChar(str) {
  const map = new Map();

  for (const ch of str) {
    const count = map.has(ch) ? map.get(ch) : 0;
    map.set(ch, count + 1);
  }
  for (const ch of str) {
    if (map.get(ch) == 1) {
      return ch;
    }
  }
  return null;
}

console.log(findFirstNoneRepeatingChar(findString));
