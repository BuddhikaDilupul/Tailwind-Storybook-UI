import type { Meta, StoryObj } from '@storybook/react'
import TextArea from './index'

const meta: Meta<typeof TextArea> = {
    title: 'Components/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        rows: 4,
        placeholder: 'Leave a comment...',
        emphasis: 'normal',
        size: 'base',
        background: 'light',
        className: ''
    }
}

export const Small: Story = {
    args: {
        rows: 4,
        placeholder: 'Leave a comment...',
        emphasis: 'low',
        size: 'sm',
        background: 'light'
    }
}

export const Large: Story = {
    args: {
        rows: 6,
        placeholder: 'Leave a longer comment...',
        emphasis: 'normal',
        size: 'lg',
        background: 'light'
    }
}

export const DarkMode: Story = {
    args: {
        rows: 4,
        placeholder: 'Leave a comment...',
        emphasis: 'normal',
        size: 'base',
        background: 'dark'
    }
}
