import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
`
export const BaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.base_card};
  border-radius: 6px;
  padding: 2.5rem;
`
