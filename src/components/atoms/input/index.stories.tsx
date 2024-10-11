import type { Meta, StoryObj } from '@storybook/react'
import { Form, Formik } from 'formik'
import { ReactNode } from 'react'
import { Input } from './index'

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// A wrapper component to provide Formik context
const FormikWrapper = ({ children }: { children: ReactNode }) => (
    <Formik initialValues={{ inputField: '' }} onSubmit={() => {}}>
        <Form>{children}</Form>
    </Formik>
)

export const Text: Story = {
    render: () => (
        <FormikWrapper>
            <Input name="inputField" type="text" placeholder="Insert text here" />
        </FormikWrapper>
    )
}

export const Password: Story = {
    render: () => (
        <FormikWrapper>
            <Input name="inputField" type="password" placeholder="Password" />
        </FormikWrapper>
    )
}

export const Number: Story = {
    render: () => (
        <FormikWrapper>
            <Input name="inputField" type="number" placeholder="Number" />
        </FormikWrapper>
    )
}

export const Date: Story = {
    render: () => (
        <FormikWrapper>
            <Input name="inputField" type="date" placeholder="Date" />
        </FormikWrapper>
    )
}
