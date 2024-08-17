const hashSet = new Set();

const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 5];
for (const number of numbers) {
  hashSet.add(number);
}
const size = hashSet.size;
hashSet.delete(2);

console.log(hashSet);
console.log({ size });
console.log({ values: [...hashSet.keys()] });

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
