import React from 'react'

import { useRouter } from 'next/router'

import MuiLink from '@material-ui/core/Link'
import NextLink from './NextLink'

import PropTypes from 'prop-types'
import classnames from 'classnames'

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = classnames(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  })

  if (naked) {
    return (
      <NextLink className={className} ref={innerRef} href={href} {...other} />
    )
  }

  return (
    <MuiLink
      component={NextLink}
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    />
  )
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool
}

export default React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
))
