import { ReactNode } from 'react'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}
export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </SectionTitleContainer>
  )
}
