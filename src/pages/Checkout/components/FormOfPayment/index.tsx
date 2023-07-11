import { Bank, CreditCard, Money } from 'phosphor-react'
import { TransactionType, TransactionButton } from './styles'
import { Controller, useFormContext } from 'react-hook-form'

export function FormOfPayment() {
  const { control } = useFormContext()
  return (
    <Controller
      name="type"
      control={control}
      render={({ field }) => {
        return (
          <TransactionType onValueChange={field.onChange} value={field.value}>
            <TransactionButton value="credit">
              <CreditCard size={16} />
              Cartão de crédito
            </TransactionButton>
            <TransactionButton value="debit">
              <Bank size={16} />
              Cartão de débito
            </TransactionButton>
            <TransactionButton value="money">
              <Money size={16} />
              Dinheiro
            </TransactionButton>
          </TransactionType>
        )
      }}
    />
  )
}
