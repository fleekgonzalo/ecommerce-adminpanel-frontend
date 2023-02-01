import React, { useEffect, useState } from 'react'
import './view.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import useFind from '../../hooks/useFind'
import { useParams } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
import { Link } from 'react-router-dom'
import { Skeleton } from '@mui/material'

const View = ({ type, url, selected, nav }) => {
  const { id } = useParams()
  const [data, getSingle, loading] = useFind(url, type)
  const [userData, setUserData] = useState([])
  let dataArr = []

  useEffect(() => {
    getSingle(id)
  }, [id])

  useEffect(() => {
    console.log(data)
    if (data) {
      setUserData(data)
      dataArr = Object.entries(data)
    }
  }, [data])

  const ele = dataArr.map((data, key) => {
    return (
      <div className='detailsItem'>
        <span className='itemKey'>{key}</span>
        <span className='itemValue'>{data}</span>
      </div>
    )
  })

  return (
    <div className='view'>
      {nav ? '' : <Sidebar selected={selected} />}
      <div className='viewContainer'>
        {nav ? '' : <Navbar />}
        {!loading ? (
          <>
            <div className='top'>
              <div className='left'>
                <Link to={`/${type}/edit/${id}`}>
                  <div className='editButton'>Edit</div>
                </Link>

                <div className='item'>
                  <img
                    src='https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'
                    alt='avatar'
                  />
                  <div className='details'>
                    <h1 className='itemTitle'>{userData.name}</h1>
                    <div className='detailsItem'>
                      <span className='itemKey'>Email:</span>
                      <span className='itemValue'>{userData.email}</span>
                    </div>
                    <div className='detailsItem'>
                      <span className='itemKey'>Role:</span>
                      <span className='itemValue'>{userData.role}</span>
                    </div>
                    <div className='detailsItem'>
                      <span className='itemKey'>Phone No:</span>
                      <span className='itemValue'>+977 9811279769</span>
                    </div>
                    <div className='detailsItem'>
                      <span className='itemKey'>Address:</span>
                      <span className='itemValue'>Ranighat-14, nepal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right'>
                <Chart aspect={5 / 1} title='User Spending (last 6 months)' />
              </div>
            </div>
            <div className='bottom'>
              <h1 className='title'>Lastest Transcations</h1>
              <List />
            </div>
          </>
        ) : (
          <>
            <div className='topSkeleton'>
              <Skeleton
                className='skeleton'
                animation='wave'
                variant='rectangular'
                height={200}
              />
              <Skeleton
                className='skeleton'
                animation='wave'
                variant='rectangular'
                height={200}
              />
            </div>
            <Skeleton
              className='skeletonBottom'
              variant='text'
              sx={{ fontSize: '1rem' }}
              height={60}
              animation='wave'
            />
            <Skeleton
              className='skeletonBottom'
              animation='wave'
              variant='rectangular'
              height={400}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default View
