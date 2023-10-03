export default function cleanSet(set, startString) {
  const values = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) values.push(s.slice(startString.length));
  });
  return values.join('-');
}
