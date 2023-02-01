import { useState } from 'react'
import Axios from 'axios'

const useUpdate = (url, type) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const update = async (id, data) => {
    setLoading(true)
    console.log(url + id)
    await Axios.patch(url + id, data)
      .then((res) => {
        if (type === 'product') {
          console.log(res)
          setData((prev) => res.data.product)
        } else if (type === 'user') {
          console.log(res)
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

  return [data, update, loading, error]
}

export default useUpdate
