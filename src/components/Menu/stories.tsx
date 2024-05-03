import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: StoryObj = {
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen'
  }
}

// Default.parameters = {
//   layout: 'fullscreen',
//   background: {
//     default: 'dark'
//   }
// }
