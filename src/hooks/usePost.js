import { useState } from 'react'
import Axios from 'axios'

const usePost = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const post = async (data) => {
    setLoading(true)

    await Axios.post(url, data)
      .then((res) => {
        console.log(res)
        data = res
        setData(data)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })

    setLoading(false)
  }

  return [data, post, loading, error]
}

export default usePost
