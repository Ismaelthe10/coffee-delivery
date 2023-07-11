import styled from 'styled-components'
import { BaseStyle } from '../../styles'

export const CompleteYourOrderHeader = styled.div`
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
export const FormSectionContainer = styled(BaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
