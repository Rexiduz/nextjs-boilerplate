import { reduce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import UserSlice from './slices/user.slice'

export { default } from './store'

const mapDispatchToActions = (dispatch, actions) => {
  return reduce(
    actions,
    (a, c, k) => ({
      ...a,
      [k]: (...args) => (typeof c === 'function' ? dispatch(c(...args)) : c)
    }),
    {}
  )
}

export const useUser = () => {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  return [user, mapDispatchToActions(dispatch, UserSlice.actions)]
}
