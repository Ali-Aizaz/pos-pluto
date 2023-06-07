import { createContext } from 'react'

export const INITIAL_USER_DATA = {
  id: '',
  name: '',
  email: '',
  imageUrl: '',
  provider: '',
  isEmailVerified: false,
  authorized: false,
  initialized: false,
}

const UserDataContext = createContext({
  userData: INITIAL_USER_DATA,
  setUserData: () => INITIAL_USER_DATA,
})

export default UserDataContext
