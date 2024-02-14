import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Click me!',
        variant: 'solid',
        size: 'md',
        colorscheme: 'primary'
    }
}
export const Submit: Story = {
    args: {
        children: 'Submit',
        variant: 'solid',
        size: 'md',
        colorscheme: 'primary'
    }
}
export const Delete: Story = {
    args: {
        children: 'Click me!',
        variant: 'outline',
        size: 'md',
        colorscheme: 'danger'
    }
}
export const Cancel: Story = {
    args: {
        children: 'Click me!',
        variant: 'outline',
        size: 'md',
        colorscheme: 'secondary'
    }
}
