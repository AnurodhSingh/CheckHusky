import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations
  userLogin: null,
  // User informations were successfully fetched
  userLoginSuccess: ['userData'],
  // An error occurred
  userLoginFailure: ['errorMessage'],
})

export const UserActionTypes = Types
export default Creators
