import type { Meta, StoryObj } from '@storybook/vue3'

import NuxtIslandTest from '../components/NuxtIslandTest.server.vue'

const meta = {
  title: 'Example/NuxtIsland',
  component: NuxtIslandTest,
} satisfies Meta<typeof NuxtIslandTest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
