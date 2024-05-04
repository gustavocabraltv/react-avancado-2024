import { Meta, StoryObj } from '@storybook/react'
import Checkbox from '.'
import { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: StoryObj<CheckboxProps> = {}

Default.args = {}

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: () => (
    <Checkbox
      labelColor="black"
      name="category"
      label="Action"
      labelFor="action"
      isChecked
    />
  )
}

Primary.args = {}
