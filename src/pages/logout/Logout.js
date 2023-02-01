import React, { useEffect } from 'react'
import useLogout from '../../hooks/useLogout'
import { ReactSession } from 'react-client-session'
import { Navigate } from 'react-router-dom'

const Logout = () => {
  const logoutUrl = 'http://localhost:4000/api/v1/auth/logout'
  const [data, logout, error, loading] = useLogout(logoutUrl)
  const [isLogged, setIsLogged] = React.useState(
    ReactSession.get('isLogged') || false
  )

  useEffect(() => {
    logout()
    ReactSession.set('isLogged', false)
    setIsLogged(ReactSession.get('isLogged'))
    console.log('logout' + isLogged)

    {
      /*if (data.status === 200) {
      console.log('logout')
      ReactSession.set('isLogged', false)
      return redirect('/login')
    }*/
    }
  }, [])

  return (
    <>
      <div>Logged Out!</div>
      {!isLogged && <Navigate to='/login' replace={true} />}
    </>
  )
}

export default Logout
