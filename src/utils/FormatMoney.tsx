export function FormatMoney(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
