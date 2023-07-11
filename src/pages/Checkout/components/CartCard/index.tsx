import { Trash } from 'phosphor-react'
import { CounterButton } from '../../../../components/CounterButton'
import { ActionsContainer, CartCardContainer, DeleteButton } from './styles'
import { CartItem } from '../../../../contexts/CartContext'
import { FormatMoney } from '../../../../utils/FormatMoney'
import { useCart } from '../../../../hooks/useCart'
interface CoffeeCartCardProps {
  coffee: CartItem
}
export function CartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = FormatMoney(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }
  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <CartCardContainer>
      <div>
        <img src={`public/coffeesImg/${coffee.photo}`} alt="" />
        <div>
          <h3>{coffee.name}</h3>

          <ActionsContainer>
            <CounterButton
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <DeleteButton onClick={handleRemove} type="button">
              <Trash size={16} />
              Remover
            </DeleteButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CartCardContainer>
  )
}
