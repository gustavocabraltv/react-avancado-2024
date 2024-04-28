import { Meta, StoryObj } from '@storybook/react'
import Button from '.'
import { Lock } from '@styled-icons/material'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: { type: 'function' }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Buy Now'
  }
}

export const WithIcon: StoryObj = {
  args: {
    children: 'Buy Now',
    icon: <Lock />
  }
}
