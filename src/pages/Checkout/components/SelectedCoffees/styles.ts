import styled from 'styled-components'
import { BaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    size: 1.125rem;
    line-height: 1.463rem;
    color: ${(props) => props.theme.base_subtitle};
    margin-bottom: 15px;
  }
`

export const DetailContainer = styled(BaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme.base_text};
    text-align: right;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  strong {
    text-align: right;
    font-size: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`
export const Button = styled.button`
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 23rem;
  height: 2.875rem;
  border: transparent;
  background: ${(props) => props.theme.yellow};
  border-radius: 6px;

  text-transform: uppercase;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 1.3rem;
  font-size: 0.875rem;
  font-stretch: 100;
  color: white;
  transition: 0.4s;
  line-height: 1.3rem;

  margin-top: 1.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme.yellow_dark};
  }
`
