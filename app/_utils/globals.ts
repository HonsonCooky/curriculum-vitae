export function hashStr(str: string, modulus: number) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = hash + chr;
  }
  return hash % modulus;
}
