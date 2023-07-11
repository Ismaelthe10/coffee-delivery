import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`

export const InputStyle = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.base_button};
  background: ${(props) => props.theme.base_input};
  color: ${(props) => props.theme.base_text};
  font-size: 0.75rem;
  padding: 0 0.75rem;
  outline: 0;
  &:focus {
    border: 1px solid ${(props) => props.theme.yellow_dark};
  }
`
