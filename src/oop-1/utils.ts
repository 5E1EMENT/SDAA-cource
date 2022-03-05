export function toFixed(value: number, precision = 2) {
  return Number(value.toFixed(precision))
}

export function toPercentage(value: number, precision = 2) {
  return `${toFixed(value, precision)}%`
}
