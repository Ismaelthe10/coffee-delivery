import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 800;
    line-height: 41.6px;
    color: ${(props) => props.theme.yellow_dark};
  }
  span {
    font-size: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.base_subtitle};
  }

  section {
    display: flex;
    justify-content: space-between;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  min-width: 32rem;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.background};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8847f8 98.76%);
  }
`

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.25rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 400;
    font-family: 'Roboto';
    color: ${(props) => props.theme.base_text};
  }

  span {
    display: flex;
    margin-left: 2px;
    gap: 0.75rem;
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 400;
    font-family: 'Roboto';
    color: ${(props) => props.theme.base_text};
  }
`
