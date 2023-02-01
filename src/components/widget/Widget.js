import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'

const Widget = ({ type }) => {
  let data

  //temporary
  const amount = 100
  const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all user',
        icons: (
          <PersonOutlineIcon
            className='icon'
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all order',
        icons: (
          <ShoppingCartIcon
            className='icon'
            style={{
              color: 'rgba(218, 0, 0, 0.4)',
              backgroundColor: 'goldenrod',
            }}
          />
        ),
      }
      break
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View all earnings',
        icons: (
          <MonetizationOnIcon
            className='icon'
            style={{
              color: '#5ff562',
              backgroundColor: 'green',
            }}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'View details',
        icons: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={{
              color: '#e15ff5',
              backgroundColor: 'purple',
            }}
          />
        ),
      }
      break

    default:
      break
  }
  return (
    <div className='widget'>
      <div className='left'>
        <div className='title'>{data.title}</div>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage postive'>
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icons}
      </div>
    </div>
  )
}

export default Widget
