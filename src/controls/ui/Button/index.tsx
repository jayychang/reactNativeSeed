import React from 'react'

import { ButtonContainer, ButtonText } from './styles'

const Button = ({ style, onPress, title }) => {
  return (
    <ButtonContainer
      style={ style }
      onPress={ onPress }
    >
      <ButtonText>{ title }</ButtonText>
    </ButtonContainer>
  )
}

export default Button
