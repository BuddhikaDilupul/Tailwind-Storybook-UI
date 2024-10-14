import type { Meta, StoryObj } from '@storybook/react'
import { Form, Formik } from 'formik'
import { ReactNode } from 'react'
import { Checkbox } from './index' // Make sure to import your Checkbox component

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// A wrapper component to provide Formik context
const FormikWrapper = ({ children }: { children: ReactNode }) => (
    <Formik initialValues={{ terms: false, promotions: false, age: false }} onSubmit={() => {}}>
        <Form>{children}</Form>
    </Formik>
)

export const Default: Story = {
    render: () => (
        <FormikWrapper>
            <Checkbox name="terms" label="I agree to the terms and conditions." />
            <Checkbox name="promotions" label="I want to receive promotional offers." />
            <Checkbox name="age" label="I am 18 years or older." />
        </FormikWrapper>
    )
}

export const Disabled: Story = {
    render: () => (
        <FormikWrapper>
            <Checkbox name="terms" label="I agree to the terms and conditions." disabled />
            <Checkbox name="promotions" label="I want to receive promotional offers." disabled />
        </FormikWrapper>
    )
}

export const Mixed: Story = {
    render: () => (
        <FormikWrapper>
            <Checkbox name="terms" label="I agree to the terms and conditions." />
            <Checkbox name="promotions" label="I want to receive promotional offers." />
            <Checkbox name="age" label="I am 18 years or older." />
        </FormikWrapper>
    )
}
