import { NavLink } from 'react-router-dom'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
export function Header() {
  const { CartQuantity } = useCart()
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} width={84} height={40} alt="logotype" />
      </NavLink>

      <HeaderButtonContainer>
        <HeaderButton>
          <MapPin size={20} weight="fill" />
          Curitiba - PR
        </HeaderButton>

        <HeaderButton>
          <NavLink to="/checkout">
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
          {CartQuantity >= 1 && <span>{CartQuantity}</span>}
        </HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  )
}
