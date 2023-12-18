export default function createInt8TypedArray(length, position, value) {
  if (length < position) throw new Error('Position outside range');

  const buffer = new DataView(
    new ArrayBuffer(length),
  
  return buffer;
}
