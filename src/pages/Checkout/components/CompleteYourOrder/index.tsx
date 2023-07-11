import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { SectionTitle } from '../SectionTitle'
import { CompleteYourOrderHeader, FormSectionContainer } from './styles'
import { AddressForm } from '../AddressForm'
import { FormOfPayment } from '../FormOfPayment'

export function CompleteYourOrder() {
  return (
    <CompleteYourOrderHeader>
      <h1>Complete seu pedido</h1>

      <FormSectionContainer>
        <SectionTitle
          title=" Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color="#8047F8" size={22} />}
        />

        <FormOfPayment />
      </FormSectionContainer>
    </CompleteYourOrderHeader>
  )
}
