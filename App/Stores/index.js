import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from './../Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as UserDataReducer } from './UserData/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    userData: UserDataReducer
  })

  return configureStore(rootReducer, rootSaga)
}
