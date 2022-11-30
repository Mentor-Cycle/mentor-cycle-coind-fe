import React from 'react'
import { InputText } from './styles'
import { IInput } from './types'

const Input = ({Placeholder }: IInput ) => {
  return (
        <InputText  placeholder={Placeholder} />
  )
}

export { Input }