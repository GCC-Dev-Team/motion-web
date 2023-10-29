import { Input, Modal, createTheme } from '@mantine/core'

const mantineTheme = createTheme({
  primaryColor: 'yellow',
  defaultRadius: 'md',
  components: {
    Modal: Modal.extend({
      styles: theme => ({ title: theme.headings.sizes.h2 }),
      defaultProps: { centered: true }
    }),
    Input: Input.extend({ defaultProps: { variant: 'filled' } })
  }
})

export default mantineTheme
