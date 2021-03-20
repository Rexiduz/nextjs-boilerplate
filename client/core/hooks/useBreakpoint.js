import theme from '@Shared/constants/theme'
import { useMediaQuery } from 'react-responsive'

const getQuery = (size) => `(min-width: ${theme.screens[size]})`

export default function useBreakpoint() {
  const xs = useMediaQuery({
    query: `(min-width: 0px)`
  })
  const sm = useMediaQuery({ query: getQuery('sm') })
  const md = useMediaQuery({ query: getQuery('md') })
  const lg = useMediaQuery({ query: getQuery('lg') })
  const xl = useMediaQuery({ query: getQuery('xl') })
  const xxl = useMediaQuery({ query: getQuery('xxl') })

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl
  }
}
