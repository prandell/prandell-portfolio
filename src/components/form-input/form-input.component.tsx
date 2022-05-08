import React, { ChangeEvent, FC, ReactElement } from 'react'
import * as Styled from './form-input.styles'

type FormInputProps = {
  label: string
  required: boolean
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
  type: string
  isTextArea: boolean
}

const getInputField = (isTextArea: boolean) => {
  return isTextArea ? Styled.FormInputArea : Styled.FormInputMain
}

const FormInput: FC<FormInputProps> = ({
  label,
  required,
  changeHandler,
  name,
  type,
  value,
  isTextArea
}: FormInputProps): ReactElement => {
  const CustomInputField = getInputField(isTextArea) as React.ElementType
  return (
    <Styled.FormInputGroup>
      <CustomInputField
        type={type}
        required={required}
        onChange={changeHandler}
        name={name}
        value={value}
        rows={5}
      ></CustomInputField>
      <Styled.FormInputLabel shrink={Boolean(value.length)}>
        {label}
      </Styled.FormInputLabel>
    </Styled.FormInputGroup>
  )
}

export default FormInput
