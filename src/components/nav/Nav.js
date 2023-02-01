import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React, { useState, useContext } from 'react'
import './nav.scss'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory'
import ReviewsIcon from '@mui/icons-material/Reviews'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import { DarkModeContext } from '../../context/darkModeContext'
import AuthContext from '../../context/AuthProvider'

const { Header, Sider, Content } = Layout

const Nav = () => {
  const { auth } = useContext(AuthContext)

  const navigate = useNavigate()
  const { dispatch } = useContext(DarkModeContext)

  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <div className='main'>
      <Layout>
        <Sider
          className='side-menu'
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className='logo'>
            <h2>
              <span className='sm-logo'>DS</span>
              <span className='lg-logo'>Dashboard</span>
            </h2>
          </div>
          <Menu
            className='menu'
            mode='inline'
            defaultSelectedKeys={['/']}
            onClick={({ key }) => {
              navigate(key)
            }}
            items={[
              {
                key: '/',
                icon: <DashboardIcon className='icon' />,
                label: 'Dashboard',
              },
              {
                key: '/users',
                icon: <AccountCircleRoundedIcon className='icon' />,
                label: 'Users',
              },
              {
                key: '/products',
                icon: <StoreMallDirectoryIcon className='icon' />,
                label: 'Products',
              },
              {
                key: '/reviews',
                icon: <ReviewsIcon className='icon' />,
                label: 'Reviews',
              },
              {
                key: '/orders',
                icon: <ShoppingCartIcon className='icon' />,
                label: 'Orders',
              },
              {
                key: '/profile',
                icon: <PersonIcon className='icon' />,
                label: 'Profile',
              },
              {
                key: '/logout',
                icon: <LogoutIcon className='icon' />,
                label: 'Logout',
              },
            ]}
          />
        </Sider>
        <Layout className='site-layout'>
          <Header className='header'>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}

            <div className='wrapper'>
              <div className='search'>
                <input type='text' name='search' placeholder='search...' />
                <SearchRoundedIcon className='icon' />
              </div>
              <div className='items'>
                <div className='item'>
                  <LanguageRoundedIcon className='icon' />
                  <span>English</span>
                </div>
                <div className='item'>
                  <DarkModeOutlinedIcon
                    onClick={() => dispatch({ type: 'TOGGLE' })}
                    className='icon'
                  />
                </div>
                <div className='item'>
                  <FullscreenExitOutlinedIcon className='icon' />
                </div>

                <div className='item'>
                  <NotificationsNoneOutlinedIcon className='icon' />
                  <div className='counter'>5</div>
                </div>
                <div className='item'>
                  <ModeCommentOutlinedIcon className='icon' />
                  <div className='counter'>3</div>
                </div>

                <div className='item'>
                  <ListOutlinedIcon className='icon' />
                </div>

                <div className='item'>
                  <img
                    src='https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg'
                    className='avatar'
                    alt='avatar'
                  />
                  <div className='userInfo'>
                    <h4>{auth.name}</h4>
                    <p>{auth.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </Header>
          <Content className='content'>
            <main>
              <Outlet />
            </main>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
export default Nav
