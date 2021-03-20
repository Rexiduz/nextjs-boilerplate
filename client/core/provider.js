import { combineProviders } from 'react-combine-providers'

import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'

const providers = combineProviders()

providers.push(Provider, { store: require('./store').default })
providers.push(ThemeProvider, {
  theme: require('@Shared/constants/theme').default
})

export default providers.master()
