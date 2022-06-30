import React from 'react'
import { Input } from 'antd'
import { useController, useFormContext } from 'react-hook-form'
import { FormItemStyled, WrapperLabel } from './styled'

const FormInput = ({ label, name, rules, defaultValue = '', wrapperProps, ...rest }) => {
  const { control } = useFormContext()
  const { field: { onChange, value }, fieldState: { error } } = useController({ name, control, rules, defaultValue })

  return (
    <FormItemStyled
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      validateStatus={(error) ? 'error' : ''}
      help={error?.message}
    >
      <Input
        onChange={onChange}
        value={value}
        {...rest}
      />
    </FormItemStyled>
  )
}

export default FormInput
