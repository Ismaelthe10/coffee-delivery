import { FilterContainer } from './styles'

export function CoffeeFilter() {
  return (
    <FilterContainer>
      <strong>Nossos cafés</strong>
      <div>
        <button>Tradicional</button>
        <button>Especial</button>
        <button>Com leite</button>
        <button>Alcoólico</button>
        <button>Gelado</button>
      </div>
    </FilterContainer>
  )
}
