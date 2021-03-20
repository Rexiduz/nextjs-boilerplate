import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const NextLink = forwardRef(function NextComposed(props, ref) {
  const { as, href, ...other } = props

  return (
    <Link href={href} as={as}>
      <a ref={ref} {...other} />
    </Link>
  )
})

NextLink.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefetch: PropTypes.bool
}

export default NextLink
