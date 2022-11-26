import React from 'react'
import { ButtonContainer } from './styles';
import { IButton } from './types';

const Button = ({title, color, colorText, variant="primary", onClick}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} color={color} colorText={colorText}>
        {title}
    </ButtonContainer>
  )
}

export { Button }