import styled from 'styled-components'

export const CartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.base_button};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    h3 {
      font-size: 14px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme.base_text};
    }
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  > p {
    font-weight: 700;
    align-self: flex-start;
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.base_text};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  height: 2rem;
  > div {
    max-width: 4.5rem;
  }
`

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5px;
  gap: 0.25rem;
  border: 0;
  width: 6.6rem;
  height: 2.375rem;

  background: ${(props) => props.theme.base_button};
  color: ${(props) => props.theme.base_text};
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.purple};
    width: 1rem;
    height: 1rem;
  }

  :hover {
    background-color: ${(props) => props.theme.base_hover};
  }
`
