import { coffees } from '../../../../data/data'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </CoffeeListContainer>
  )
}
