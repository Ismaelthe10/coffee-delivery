import { ShoppingCartSimple } from 'phosphor-react'

import {
  AmountButtonContainer,
  CardContainer,
  CoffeeDescription,
  CoffeeName,
  ShoppingCartButton,
  Tags,
} from './styles'

import { FormatMoney } from '../../../../utils/FormatMoney'
import { CounterButton } from '../../../../components/CounterButton'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'
export interface Coffee {
  id: number
  name: string
  tags: string[]
  description: string
  photo: string
  price: number
}
interface CoffeeProps {
  coffee: Coffee
}
export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  function handleIncrease() {
    setQuantity((state) => state + 1)
  }
  function handleDecrease() {
    setQuantity((state) => state - 1)
  }
  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = FormatMoney(coffee.price)

  return (
    <CardContainer>
      <img
        src={`/CoffeesImg/${coffee.photo}`}
        alt="Imagem meramente ilustrativa"
      />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <AmountButtonContainer>
        R$
        <strong>{formattedPrice}</strong>
        <CounterButton
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <ShoppingCartButton onClick={handleAddToCart}>
          <ShoppingCartSimple alt="Adicionar ao carrinho" size={22} />
        </ShoppingCartButton>
      </AmountButtonContainer>
    </CardContainer>
  )
}
