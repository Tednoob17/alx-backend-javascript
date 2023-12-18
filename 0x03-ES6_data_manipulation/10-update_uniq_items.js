export default function (map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  return map.forEach((key, val) => {
    if (key === 1) map.set(val, 100);
  });
}
