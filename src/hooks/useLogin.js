import { useState, useEffect } from 'react'
import Axios from 'axios'

const useLogin = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async (data) => {
    setLoading(true)
    await Axios.post(url, data)
      .then((res) => {
        console.log(res)
        setData(res)
      })
      .catch((error) => {
        console.log(error)
        if (!error?.response) {
          setError('No Server Response')
        } else if (error.response?.status === 400) {
          setError('Missing username or password')
        } else if (error.response?.status === 401) {
          setError('Unauthorized')
        } else {
          setError('Login Failed')
        }
      })
    setLoading(false)
  }

  return [data, login, error, loading]
}

export default useLogin
