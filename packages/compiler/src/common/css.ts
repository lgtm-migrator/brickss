export function isModifier(str: string): boolean {
  return str.startsWith("[state|");
}

export function isPsuedoSelector(str: string): boolean {
  return str.startsWith(":");
}

export function isAtRule(str: string): boolean {
  return str.startsWith("@");
}
