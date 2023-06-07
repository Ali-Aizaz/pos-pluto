/* eslint-disable react/jsx-props-no-spreading */
import { useMemo, useState } from 'react'

import 'styles/globals.css'

import UserDataContext, { INITIAL_USER_DATA } from 'context/userData'

const App = ({ Component, pageProps }) => {
  const [userData, setUserData] = useState(INITIAL_USER_DATA)

  const userDataContext = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData]
  )

  return (
    <UserDataContext.Provider value={userDataContext}>
      <Component {...pageProps} />
    </UserDataContext.Provider>
  )
}

export default App
