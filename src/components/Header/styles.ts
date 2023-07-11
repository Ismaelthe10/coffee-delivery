import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.5rem;
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 0;
  padding: 0.5rem;
  text-decoration: none;
  font-size: 0.825rem;
  font-family: 'Roboto', monospace;
  line-height: 130%;
  color: ${(props) => props.theme.purple_dark};

  background: ${(props) => props.theme.purple_light};
  position: relative;
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.yellow_dark};
    color: white;
    font-size: 0.75rem;
    font-weight: 700;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    position: absolute;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
  }
  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 4px;
  }

  :last-child {
    background: ${(props) => props.theme.yellow_light};
    a {
      width: 20px;
      height: 20px;
    }
    svg {
      color: ${(props) => props.theme.yellow_dark};
      width: 20px;
      height: 20px;
    }
  }
`
