import { Content, IconsContainer, SuccessContainer } from './styles'
import successImg from '../../assets/successImg.svg'
import successPaymentIcon from '../../assets/successPaymentIcon.svg'
import successTimedIcon from '../../assets/successTimedIcon.svg'
import successLocalIcon from '../../assets/successLocalIcon.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckoutData } from '../Checkout'
import { useEffect } from 'react'

interface LocationType {
  state: CheckoutData
}
export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  })

  if (!state) return <></>
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu, pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <section>
        <Content>
          <IconsContainer>
            <div>
              <img src={successLocalIcon} alt="" />

              <strong>
                <span>Entrega em:</span>
                {state.street}, {state.number} {state.district} - {state.city},{' '}
                {state.uf}
              </strong>
            </div>
            <div>
              <img src={successTimedIcon} alt="" />

              <strong>
                <span>Previsão de entrega:</span>20 min - 40min
              </strong>
            </div>
            <div>
              <img src={successPaymentIcon} alt="" />

              <strong>
                <span>Pagamento na entrega:</span>
                {state.type === 'credit'
                  ? 'Crédito'
                  : state.type === 'debit'
                  ? 'Débito'
                  : state.type === 'money'
                  ? 'Dinheiro'
                  : ''}
              </strong>
            </div>
          </IconsContainer>
        </Content>
        <img src={successImg} alt="" />
      </section>
    </SuccessContainer>
  )
}
