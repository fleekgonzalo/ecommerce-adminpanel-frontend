import { useState } from 'react'
import Axios from 'axios'

const useFind = (url, type) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getSingle = async (id) => {
    setLoading(true)

    await Axios.get(url + id, {})
      .then((res) => {
        console.log(res)
        if (type === 'products') {
          setData((prev) => res.data.product)
        } else if (type === 'users') {
          setData((prev) => res.data.user)
        } else if (type === 'review') {
          setData((prev) => res.data.review)
        }
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })

    setLoading(false)
  }

  return [data, getSingle, loading, error]
}

export default useFind
