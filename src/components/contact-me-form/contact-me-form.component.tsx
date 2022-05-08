import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import emailjs from '@emailjs/browser'
import * as Styled from './contact-me-form.styles'
import { GithubIconLink, LinkedInIconLink } from '../icon-svgs/icon-svgs.styles'

type ContactMeFormInputs = {
  from_name: string
  reply_to: string
  message: string
}

const defaultFormInputs: ContactMeFormInputs = {
  from_name: '',
  reply_to: '',
  message: ''
}

const ContactMeForm: FC = () => {
  const [formInputs, setFormInputs] =
    useState<ContactMeFormInputs>(defaultFormInputs)
  const { from_name, reply_to, message } = formInputs

  const resetFormInputs = () => {
    setFormInputs(defaultFormInputs)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormInputs({ ...formInputs, [name]: value })
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (
      process.env.REACT_APP_EMAILJS_SERVICE_KEY &&
      process.env.REACT_APP_EMAILJS_TEMPLATE_KEY &&
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_KEY,
          process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
          event.currentTarget,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
          console.log(response)
          window.alert('Message successfully sent!')
        })
        .catch((error) => {
          console.log(error)
          window.alert('There was an error sending your message.')
        })
      resetFormInputs()
    } else {
      window.alert('There was an error sending your message.')
    }
  }

  return (
    <Styled.ContactMeContainer>
      <Styled.FormTitle>Contact Me</Styled.FormTitle>
      <Styled.ContactMeForm onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          required
          type="input"
          changeHandler={handleChange}
          name="from_name"
          value={from_name}
          isTextArea={false}
        />
        <FormInput
          label="Email"
          required
          type="email"
          changeHandler={handleChange}
          name="reply_to"
          value={reply_to}
          isTextArea={false}
        />
        <FormInput
          label="Message"
          required
          type="message"
          changeHandler={handleChange}
          name="message"
          value={message}
          isTextArea={true}
        />
        <Styled.ButtonsContainer>
          <Button type="submit">Submit</Button>
          <Styled.Socials>
            <Styled.SocialIconLink
              target="_blank"
              href="https://www.linkedin.com/in/randellp/"
            >
              <LinkedInIconLink />
            </Styled.SocialIconLink>
            <Styled.SocialIconLink
              target="_blank"
              href="https://github.com/prandell"
            >
              <GithubIconLink />
            </Styled.SocialIconLink>
          </Styled.Socials>
        </Styled.ButtonsContainer>
      </Styled.ContactMeForm>
    </Styled.ContactMeContainer>
  )
}

export default ContactMeForm
