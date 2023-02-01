import { useState, useEffect } from 'react'
import Axios from 'axios'

const useGetAll = (url, type) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getAll = async () => {
    setLoading(true)
    console.log(url)
    await Axios.get(
      url,
      {},
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    )
      .then((res) => {
        console.log(res)
        if (type === 'products') {
          setData(res.data.products)
        } else if (type === 'users') {
          setData(res.data.users)
        } else if (type === 'reviews') {
          setData(res.data.reviews)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }

  useEffect(() => {
    getAll()
  }, [url])

  return [data, getAll, error, loading]
}

export default useGetAll
