import { CompleteYourOrder } from './components/CompleteYourOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

const checkOutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número da rua'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o nome do bairro'),
  city: zod.string().min(1, 'Informe o nome da cidade'),
  uf: zod.string().min(1, 'Informe a unidade federal'),
  type: zod.enum(['credit', 'debit', 'money']),
})

export type CheckoutData = zod.infer<typeof checkOutFormValidationSchema>

type ConfirmCheckoutFormData = CheckoutData
export function Checkout() {
  const checkOutForm = useForm<ConfirmCheckoutFormData>({
    resolver: zodResolver(checkOutFormValidationSchema),
  })
  const { cleanCart } = useCart()
  const { handleSubmit } = checkOutForm

  const navigate = useNavigate()
  function handleConfirmCheckout(data: ConfirmCheckoutFormData) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }
  return (
    <FormProvider {...checkOutForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmCheckout)}>
        <CompleteYourOrder />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
