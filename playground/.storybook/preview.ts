import type { Preview } from '@storybook/vue3'
import { h, Suspense } from 'vue'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (story) => {
      return {
        setup() {
          return () => h(Suspense, {}, [h(story())])
        },
      }
    },
  ],
}

export default preview
