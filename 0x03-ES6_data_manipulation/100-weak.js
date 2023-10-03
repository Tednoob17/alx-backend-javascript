export const weakMap = new WeakMap();

export function queryAPI(object) {
  if (weakMap.has(object)) {
    const data = weakMap.get(object);
    if (data >= 4) throw new Error('Endpoint load is high');
    weakMap.set(object, (data + 1));
  } else weakMap.set(object, 1);
}
