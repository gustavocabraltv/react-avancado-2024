import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'
import { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {}

Default.args = {
  children: 'Populares'
}
