'use-client'

/* eslint-disable react/jsx-props-no-spreading */
import { useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import 'styles/globals.css'

import ProtectContainer from 'containers/Protect'
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
      <ProtectContainer>
        <Component {...pageProps} />
      </ProtectContainer>
      <Toaster
        position="top-center"
        containerStyle={{
          bottom: '1.25rem',
          right: '1.25rem',
        }}
      />
    </UserDataContext.Provider>
  )
}

export default App
