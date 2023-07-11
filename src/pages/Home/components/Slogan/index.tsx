import {
  SloganContainer,
  SloganContent,
  CupImg,
  TitleContent,
  SubtitleContent,
  BenefitsContainer,
} from './styles'
import cupImg from '../../../../assets/cupImg.svg'

import ShoppingCart from '../../../../assets/simpleBuy.svg'
import Package from '../../../../assets/packIcon.svg'
import Timer from '../../../../assets/timed.svg'
import Coffee from '../../../../assets/miniCoffee.svg'

export function Slogan() {
  return (
    <SloganContainer>
      <SloganContent>
        <TitleContent>
          Encontre o café perfeito para qualquer hora do dia
        </TitleContent>

        <SubtitleContent>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubtitleContent>

        <BenefitsContainer>
          <div>
            <img src={ShoppingCart} alt="" />
            Compra simples e segura
          </div>
          <div>
            <img src={Package} alt="" />
            Embalagem mantém o café intacto
          </div>
          <div>
            <img src={Timer} alt="" />
            Entrega rápida e rastreada
          </div>
          <div>
            <img src={Coffee} alt="" />O café chega fresquinho até você
          </div>
        </BenefitsContainer>
      </SloganContent>
      <CupImg>
        <img src={cupImg} alt="" />
      </CupImg>
    </SloganContainer>
  )
}
