import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Historia01: StoryObj = {
  args: {
    title: 'História 1',
    description: 'Descrição 1'
  }
}
