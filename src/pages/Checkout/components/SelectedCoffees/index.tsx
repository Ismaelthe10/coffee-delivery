import { CartCard } from '../CartCard'
import { Summary } from './Summary'
import { Button, DetailContainer, SelectedCoffeesContainer } from './styles'
import { useCart } from '../../../../hooks/useCart'

export function SelectedCoffees() {
  const { cartItems, CartQuantity } = useCart()
  return (
    <SelectedCoffeesContainer>
      <h1>Cafés selecionados</h1>
      <DetailContainer>
        {cartItems.map((item) => (
          <CartCard key={item.id} coffee={item} />
        ))}

        <Summary />

        <Button type="submit" disabled={CartQuantity <= 0}>
          Confirmar pedido
        </Button>
      </DetailContainer>
    </SelectedCoffeesContainer>
  )
}
