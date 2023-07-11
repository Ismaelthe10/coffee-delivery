import { useFormContext } from 'react-hook-form'
import { AddressFormContainer, InputStyle } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <InputStyle
        placeholder="CEP"
        className="cep"
        type="number"
        {...register('cep')}
        required
      />
      <InputStyle
        placeholder="Rua"
        className="street"
        {...register('street')}
        required
      />
      <InputStyle
        placeholder="Número"
        className="number"
        type="number"
        {...register('number')}
        required
      />
      <InputStyle
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
      />
      <InputStyle placeholder="Bairro" {...register('district')} required />
      <InputStyle placeholder="Cidade" {...register('city')} required />
      <InputStyle placeholder="UF" {...register('uf')} required />
    </AddressFormContainer>
  )
}
