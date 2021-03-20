import { combineProviders } from 'react-combine-providers'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const providers = combineProviders()

providers.push(Provider, { store: require('./store').default })
providers.push(ThemeProvider, {
  theme: require('@Shared/constants/theme').default
})

export default providers.master()
