import styled, { css } from 'styled-components'

const shrinkLabelStyles = css`
  top: -18px;
  left: 0px;
  font-size: 12px;
  color: var(--accent-colour-2);
`

interface FormInputProps {
  shrink: boolean
}

export const FormInputLabel = styled.label<FormInputProps>`
  color: var(--primary-text-colour);
  font-family: 'Titillium Web', sans serif;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }: FormInputProps) => shrink && shrinkLabelStyles}
`

export const FormInputMain = styled.input`
  background: none;
  font-family: 'Titillium Web', sans serif;
  background-color: #f9f9f936;
  color: var(--primary-text-colour);
  font-size: 14px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--accent-colour-3);
  margin: 5px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`

export const FormInputArea = styled.textarea`
  background: none;
  background-color: #f9f9f936;
  font-family: 'Titillium Web', sans serif;
  color: var(--primary-text-colour);
  font-size: 14px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--accent-colour-3);
  margin: 5px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`

export const FormInputGroup = styled.div`
  position: relative;
  margin: 25px 0;
`
