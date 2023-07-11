import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`

export const TransactionButton = styled(RadioGroup.Item)`
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 0 0.6rem;
  background: ${(props) => props.theme.base_button};
  border: 1px solid ${(props) => props.theme.base_button};
  gap: 0.75rem;

  border-radius: 6px;
  height: 3rem;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.base_text};

  transition: 0.4s;
  &:hover {
    background: ${(props) => props.theme.base_hover};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
  &[data-state='checked'] {
    background: ${(props) => props.theme.purple_light};
    border: 1px solid ${(props) => props.theme.purple};
  }
  user-select: none;
`
