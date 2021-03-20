import CssVariable from '@View/styles/modules/variables.module.scss'

const theme = {
  screens: {
    xs: CssVariable['breakpoint-xs'],
    sm: CssVariable['breakpoint-sm'],
    md: CssVariable['breakpoint-md'],
    lg: CssVariable['breakpoint-lg'],
    xl: CssVariable['breakpoint-xl'],
    xxl: CssVariable['breakpoint-xxl']
  }
}

export default theme
