import React, { useEffect, useState } from 'react'
import './user.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/datatable/Datatable'
import useGetAll from '../../hooks/useGetAll'
import { Skeleton } from '@mui/material'

const User = ({ type, url, showTitle, selected, nav }) => {
  const [updated, setUpdated] = useState(false)
  const [data, loading] = useGetAll(url, type)
  const [rowsData, setRowsData] = useState(null)

  useEffect(() => {
    console.log(data)
    setRowsData((prev) => data)
  }, [data])

  return (
    <div className='user'>
      {nav ? '' : <Sidebar selected={selected} />}
      <div className='userContainer'>
        {nav ? '' : <Navbar />}
        {!loading ? (
          rowsData && (
            <DataTable
              nav={nav}
              selected={selected}
              rowsData={rowsData}
              setUpdated={setUpdated}
              type={type}
              url={url}
              showTitle={showTitle}
            />
          )
        ) : (
          <>
            <Skeleton
              className='skeleton'
              variant='text'
              sx={{ fontSize: '1rem' }}
              height={60}
              animation='wave'
            />
            <Skeleton
              className='skeleton'
              animation='wave'
              variant='rectangular'
              height={550}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default User
