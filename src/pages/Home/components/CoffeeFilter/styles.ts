import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 3rem;
    letter-spacing: 0em;
    text-align: left;
  }
  div {
    display: flex;
    gap: 0.5rem;

    button {
      border: 1px solid #dbac2c;
      border-radius: 6.25rem;
      width: 5.563rem;
      height: 1.438rem;
      background-color: ${(props) => props.theme.background};
      padding: 0 0.3rem;

      font-family: 'Roboto';
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 1.3rem;
      color: ${(props) => props.theme.yellow_dark};
      text-transform: uppercase;

      :hover {
        background-color: ${(props) => props.theme.yellow_dark};
        color: white;
      }
    }
  }
`
