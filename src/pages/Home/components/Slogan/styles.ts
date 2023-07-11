import styled from 'styled-components'
import backgroundGradientImg from '../../../../../public/sloganBackground.png'

export const SloganContainer = styled.section`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
  padding: 5.75rem 0;

  background-image: ${`url(${backgroundGradientImg}) `};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background: linear-gradient(0deg, #fff 50%);
`

export const SloganContent = styled.div``
export const TitleContent = styled.strong`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 48px;
  text-align: left;
  line-height: 3.9rem;
`

export const SubtitleContent = styled.div`
  font-size: 1.25rem;
  font-family: 'Roboto';
  line-height: 1.625rem;
  font-weight: 400;
  color: ${(props) => props.theme.base_subtitle};

  padding-top: 1rem;
  padding-bottom: 4.125rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
`

export const CupImg = styled.div`
  display: flex;
  justify-content: end;
`
