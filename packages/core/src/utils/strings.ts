export function trimSuffix(toTrim: string, trim: string): string {
  if (!toTrim || !trim) {
    return toTrim
  }

  const index = toTrim.lastIndexOf(trim)
  if (index === -1 || (index + trim.length) !== toTrim.length) {
    return toTrim
  }

  return toTrim.slice(0, Math.max(0, index))
}
