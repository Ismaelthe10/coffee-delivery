import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme.base_card};
  border-radius: 6px 36px;
  text-align: center;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`
export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${(props) => props.theme.yellow_light};
    color: ${(props) => props.theme.yellow_dark};
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`
export const CoffeeName = styled.div`
  width: 216px;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3rem;
  color: ${(props) => props.theme.base_subtitle};
  margin-bottom: 0.5rem;
`
export const CoffeeDescription = styled.div`
  width: 216px;
  margin-bottom: 2rem;
  font-family: 'Roboto';
  font-size: 0.875rem;
  color: ${(props) => props.theme.base_label};
  line-height: 1.125rem;
`
export const AmountButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  strong {
    font-family: 'Baloo 2';
    font-size: 1.4rem;
    font-weight: 800;
    line-height: 1.3rem;
    color: ${(props) => props.theme.base_text};

    ::before {
      content: '';
      margin-left: 0.18rem;
    }
  }
  div {
    display: flex;
    padding: 0.5rem 0.5rem;
    height: 2.375rem;
    background: ${(props) => props.theme.base_button};
    border-radius: 6px;

    margin-right: 8px;
    margin-left: 23px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Roboto';
      font-size: 0.875rem;
      color: ${(props) => props.theme.base_title};
      line-height: 1.125rem;
    }
  }
`

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme.purple_dark};

  :hover {
    background-color: ${(props) => props.theme.purple};
  }
  svg {
    color: #fff;
    path {
      fill: #fff;
    }
  }
`
