import { useState } from 'react'
import Axios from 'axios'

const useLogout = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const logout = async (data) => {
    setLoading(true)
    await Axios.get(url, data)
      .then((res) => {
        console.log(res)
        setData(res)
      })
      .catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }

  return [data, logout, error, loading]
}

export default useLogout
