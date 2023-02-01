import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory'
import ReviewsIcon from '@mui/icons-material/Reviews'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import { DarkModeContext } from '../../context/darkModeContext'

const Sidebar = ({ selected }) => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className='top'>
        <div className='logo'>ADMIN</div>
      </div>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/admin' className='link'>
            <li className={selected === 'dashboard' ? 'selected' : ''}>
              <DashboardIcon className='icon' />
              <span>DASHBOARD</span>
            </li>
          </Link>
          <p className='title'>SERVICES</p>
          <Link to='/admin/users' className='link'>
            <li className={selected === 'users' ? 'selected' : ''}>
              <AccountCircleRoundedIcon className='icon' />
              <span>USERS</span>
            </li>
          </Link>
          <Link to='/admin/products' className='link'>
            <li className={selected === 'products' ? 'selected' : ''}>
              <StoreMallDirectoryIcon className='icon' />
              <span>PRODUCTS</span>
            </li>
          </Link>
          <Link to='/admin/reviews' className='link'>
            <li className={selected === 'reviews' ? 'selected' : ''}>
              <ReviewsIcon className='icon' />
              <span>REVIEWS</span>
            </li>
          </Link>
          <Link to='/admin/orders' className='link'>
            <li className={selected === 'orders' ? 'selected' : ''}>
              <ShoppingCartIcon className='icon' />
              <span>ORDERS</span>
            </li>
          </Link>
          <p className='title'>USER</p>
          <li>
            <PersonIcon className='icon' />
            <span>Profile</span>
          </li>
          <Link to='/logout' className='link'>
            <li>
              <LogoutIcon className='icon' />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <p className='mode'>Mode</p>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
