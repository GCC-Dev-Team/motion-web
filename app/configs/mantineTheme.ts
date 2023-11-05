import { AppShell, Drawer, Input, Modal, createTheme } from '@mantine/core'

const mantineTheme = createTheme({
  primaryColor: 'yellow',
  defaultRadius: 'md',
  components: {
    AppShell: AppShell.extend({
      styles: () => ({
        root: { position: 'relative' },
        header: { position: 'absolute' },
        navbar: { position: 'absolute' }
      })
    }),
    Modal: Modal.extend({
      styles: theme => ({ title: theme.headings.sizes.h2 }),
      defaultProps: { centered: true }
    }),
    Drawer: Drawer.extend({
      styles: theme => ({ title: theme.headings.sizes.h2 })
    }),
    Input: Input.extend({ defaultProps: { variant: 'filled' } })
  }
})

export default mantineTheme
