import { Minus, Plus } from 'phosphor-react'
import { ButtonBase, CounterButtonContainer } from './styles'
interface CounterButtonProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}
export function CounterButton({
  onIncrease,
  onDecrease,
  quantity,
}: CounterButtonProps) {
  return (
    <CounterButtonContainer>
      <ButtonBase type="button" disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={12} weight="bold" />
      </ButtonBase>
      <span>{quantity}</span>
      <ButtonBase type="button" onClick={onIncrease}>
        <Plus size={12} weight="bold" />
      </ButtonBase>
    </CounterButtonContainer>
  )
}
