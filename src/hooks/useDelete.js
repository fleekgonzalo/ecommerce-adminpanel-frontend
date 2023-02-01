import { useState } from 'react'
import Axios from 'axios'

const useDelete = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const deleteItem = async (id) => {
    setLoading(true)
    await Axios.delete(url + id, {})
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })

    setLoading(false)
  }

  return [data, deleteItem, loading, error]
}

export default useDelete
