import type { Meta, StoryObj } from '@storybook/react'
import Loading from './index'

const meta: Meta<typeof Loading> = {
    title: 'Components/Loading',
    component: Loading,
    parameters: {
        // layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Loader: Story = {}
