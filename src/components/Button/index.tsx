import React from 'react'
import { ButtonContainer } from './styles';
import { IButton, VARIANT_BUTTON } from './types';

const Button = ({title, variant, onClick}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} >
        {title}
    </ButtonContainer>
  )
}

export { Button }