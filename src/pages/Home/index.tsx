import { CoffeeFilter } from './components/CoffeeFilter'
import { CoffeeList } from './components/CoffeeList'
import { Slogan } from './components/Slogan'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Slogan />
      <CoffeeFilter />
      <CoffeeList />
    </HomeContainer>
  )
}
