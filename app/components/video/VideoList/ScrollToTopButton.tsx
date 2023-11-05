import { Affix, Button, Transition } from '@mantine/core'
import { IconArrowUp } from '@tabler/icons-react'

interface ScrollToTopButtonProps {
  mounted: boolean
  onScrollToTop: () => void
}

const ScrollToTopButton = ({
  mounted,
  onScrollToTop
}: ScrollToTopButtonProps) => {
  return (
    <Affix position={{ bottom: 20, right: 36 }}>
      <Transition transition="slide-up" mounted={mounted}>
        {transitionStyles => (
          <Button
            leftSection={<IconArrowUp />}
            style={transitionStyles}
            onClick={onScrollToTop}>
            回到顶部
          </Button>
        )}
      </Transition>
    </Affix>
  )
}

export default ScrollToTopButton
