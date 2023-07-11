import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  h2 {
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  h3 {
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.base_text};
  }
  svg {
    color: ${(props) => props.theme.yellow_dark};
  }
`
