import type { Meta, StoryObj } from '@storybook/react'
import { Form, Formik } from 'formik'
import { ReactNode } from 'react'
import { Select } from './index'

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// A wrapper component to provide Formik context
const FormikWrapper = ({ children }: { children: ReactNode }) => (
    <Formik initialValues={{ selectField: '' }} onSubmit={() => {}}>
        <Form>{children}</Form>
    </Formik>
)

export const Default: Story = {
    render: () => (
        <FormikWrapper>
            <Select name="selectField">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
        </FormikWrapper>
    )
}

export const WithDefaultSelection: Story = {
    render: () => (
        <FormikWrapper>
            <Select name="selectField">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2" selected>
                    Option 2
                </option>
                <option value="option3">Option 3</option>
            </Select>
        </FormikWrapper>
    )
}
