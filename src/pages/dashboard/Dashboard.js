import React, { useContext } from 'react'
import './dashboard.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
import { ReactSession } from 'react-client-session'
import { Navigate } from 'react-router-dom'

const Dashboard = ({ selected, nav }) => {
  ReactSession.setStoreType('localStorage')
  const [isLogged, setIsLogged] = React.useState(
    ReactSession.get('isLogged') || false
  )
  return (
    <>
      {!isLogged ? (
        <>
          <Navigate to='/login' replace={true} />
        </>
      ) : (
        <div className='dashboard'>
          {nav ? '' : <Sidebar selected={selected} />}
          <div className='dashboardContainer'>
            {nav ? '' : <Navbar page='dashboard' />}
            <div className='widgets'>
              <Widget type='user' />
              <Widget type='order' />
              <Widget type='earning' />
              <Widget type='balance' />
            </div>
            <div className='charts'>
              <Featured />
              <Chart aspect={3 / 1} title='Last 6 months (Revenue)' />
            </div>
            <div className='bottomContainer'>
              <h1 className='title'>Latest Transactions</h1>
              <List />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard
