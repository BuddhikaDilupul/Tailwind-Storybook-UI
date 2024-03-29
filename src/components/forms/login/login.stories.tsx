import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './Login'

const meta: Meta<typeof LoginForm> = {
    title: 'Forms/Login',
    component: LoginForm,
    parameters: {
        // layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Login: Story = {}
