import { useState } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@View/atoms/Link'
import BscSearch from '@Client/features/BscSearch'

import { makeStyles } from '@material-ui/core'

const wadAddress = '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc'

const useStyles = makeStyles({
  root: {
    width: 'inherit',
    height: 'inherit',
    padding: 0,
    background: '#181717'
  },
  nav: {
    width: 'inherit',
    height: 56,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  body: {
    display: 'block',
    width: 'inherit',
    height: 'calc(100% - 56px)'
  }
})

export default function Index() {
  const classes = useStyles()
  const [tokenAddress, setAddress] = useState(wadAddress)

  const url = `https://unidexbeta.app/bscCharting?token=${tokenAddress}`

  return (
    <Container className={classes.root}>
      <Container className={classes.nav}>
        <BscSearch />
      </Container>
      <iframe
        id="tradingview_40892"
        name="tradingview_40892"
        className={classes.body}
        src={url}
        frameborder={0}
        allowTransparency
        allowFullscreen
      />
    </Container>
  )
}
