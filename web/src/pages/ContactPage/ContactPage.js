import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  Label,
  TextField, TextAreaField, FieldError, FormError,
  Submit,
} from '@redwoodjs/forms'
import { Flash, useFlash, useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const { addMessage } = useFlash()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      addMessage('Thank you for your submission!', {
        style: { backgroundColor: 'green', color: 'white', padding: '1rem' }
      })
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <>
      <BlogLayout>
        <Flash timeout={1000} />
        <Form
          onSubmit={onSubmit}
          validation={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
        >
          <FormError
            error={error}
            wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
          />
          <Label name="name" errorClassName="error">Name</Label>
          <TextField
            name="name"
            errorClassName="error"
            validation={{ required: true }}
          />
          <FieldError name="name" style={{ display: 'block', color: 'red' }} />

          <Label name="email" errorClassName="error">Email</Label>
          <TextField
            name="email"
            errorClassName="error"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^.]+\..+/,
              }
            }}
          />
          <FieldError name="email" style={{ display: 'block', color: 'red' }} />

          <Label name="message" errorClassName="error">Message</Label>
          <TextAreaField
            name="message"
            errorClassName="error"
            validation={{ required: true }}
          />
          <FieldError name="message" style={{ display: 'block', color: 'red' }} />

          <Submit disabled={loading}>Save</Submit>
        </Form>
      </BlogLayout>
    </>
  )
}

export default ContactPage
