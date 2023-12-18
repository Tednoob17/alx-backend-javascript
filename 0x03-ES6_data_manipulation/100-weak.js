export const weakMap = new WeakMap();

export function queryAPI(object) {
  if (weakMap.has(object)) {
    const data = weakMap.get(object);
   
}
