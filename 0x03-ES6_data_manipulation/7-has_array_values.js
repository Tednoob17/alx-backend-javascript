export default function hasValuesFromArray(set, array) {
  const iterator = array.values();
  for (const elem of iterator) if (set.has(elem) === false) return false;
  return true;
}

