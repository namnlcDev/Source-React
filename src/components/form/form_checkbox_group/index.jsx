import { Checkbox } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { CheckboxGroupStyled, FormItemStyled, WrapperLabel } from './styled'

const FormCheckboxGroup = ({
  label,
  name,
  rules,
  defaultValue = '',
  wrapperProps,
  options = [],
  text,
  ...rest
}) => {
  const { control, setValue } = useFormContext()
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({ name, control, rules, defaultValue })

  useEffect(() => {
    if (value.length > 1) {
      setValue(name, [value[value.length - 1]])
    }
  }, [value])

  return (
    <FormItemStyled
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      validateStatus={error ? 'error' : ''}
      help={error?.message}
    >
      <CheckboxGroupStyled {...rest} value={value} onChange={onChange}>
        {options.map((opt, index) => (
          <Checkbox key={index} value={opt.value}>
            {opt.label}
          </Checkbox>
        ))}
      </CheckboxGroupStyled>
    </FormItemStyled>
  )
}

export default FormCheckboxGroup
