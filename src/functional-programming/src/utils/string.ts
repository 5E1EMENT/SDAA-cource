interface CompareOptions {
  insensitive?: boolean
}

export const compare = (a: string, b: string, opts: CompareOptions = {}) => {
  const { insensitive } = opts

  return a.localeCompare(b, undefined, {
    sensitivity: insensitive ? 'base' : undefined,
  })
}

interface MatchOptions extends CompareOptions {
  partial?: boolean
}

export const match = (a: string, b: string, opts: MatchOptions = {}) => {
  const { insensitive = true, partial = true } = opts

  if (!partial) return !compare(a, b, { insensitive })
  if (!insensitive) return a.includes(b)

  return a.toLowerCase().includes(b.toLowerCase())
}
