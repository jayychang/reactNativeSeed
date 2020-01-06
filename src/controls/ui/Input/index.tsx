import React from 'react'

import { TextInput } from './styles'

const Input = ({ style, value, onChange }) => {
  return (
    <TextInput
      style={ style }
      value={ value }
      onChangeText={ onChange }
    />
  )
}

export default Input
