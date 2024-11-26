import type { Meta, StoryObj } from '@storybook/vue3'
import { h, Suspense } from 'vue'

import RegularWithIslandComponent from '../components/RegularWithIslandComponent.vue'

const meta = {
  title: 'Example/RegularWithIslandComponent',
  component: RegularWithIslandComponent,
} satisfies Meta<typeof RegularWithIslandComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render() {
    return {
      setup() {
        return () => h(Suspense, h(RegularWithIslandComponent))
      },
    }
  },
}
