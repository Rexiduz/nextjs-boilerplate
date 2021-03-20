import { combineProviders } from 'react-combine-providers'

import { Provider } from 'react-redux'

const providers = combineProviders()

providers.push(Provider, { store: require('./store').default })

export default providers.master()
