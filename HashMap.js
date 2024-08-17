const map = new Map();

map.set(1, "Mosh");
map.set(2, "hamedani");
map.set(3, "Mary");
map.set(4, "Marian");
map.set(null, null);
map.delete(null);
const value = map.get(3);

const key = map.keys();
const valuse = map.values();
const entries = map.entries();
const size = map.size;

console.log(map.has(3));
console.log({ size });
console.log({ key });
console.log({ value });
console.log({ entries });
console.log({ valuse: [...map.keys()] });
console.log({ map });

for (const [key, value] of map.entries()) {
  console.log(`key=${key} value=${value}`);
}

const findString = "a green apple";

function findFirstNonRepeatingChar(str) {
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

console.log(findFirstNonRepeatingChar(findString));
