import styled from 'styled-components'
export const CounterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 38px;
  background: ${(props) => props.theme.base_button};
  border-radius: 6px;

  span {
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
export const ButtonBase = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  padding: 0 0.3rem;
  background: ${(props) => props.theme.base_button};
  color: ${(props) => props.theme.purple};

  :hover {
    svg {
      color: #000;
    }
  }
`
