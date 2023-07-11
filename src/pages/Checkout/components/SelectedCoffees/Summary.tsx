import { SummaryContainer } from './styles'
import { useCart } from '../../../../hooks/useCart'
import { FormatMoney } from '../../../../utils/FormatMoney'

const DELIVERY = 4.5
export function Summary() {
  const { cartItemsTotal } = useCart()
  const cartTotal = DELIVERY + cartItemsTotal
  const formattedItemsTotal = FormatMoney(cartItemsTotal)
  const formattedCartItemsTotal = FormatMoney(cartTotal)
  const formattedDelivery = FormatMoney(DELIVERY)

  return (
    <SummaryContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ {formattedItemsTotal}</span>
      </div>

      <div>
        <span>Entrega</span>
        <span>R$ {formattedDelivery}</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>R$ {formattedCartItemsTotal}</strong>
      </div>
    </SummaryContainer>
  )
}
