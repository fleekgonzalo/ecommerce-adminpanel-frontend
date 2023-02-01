import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import User from './pages/users/User'
import View from './pages/view/View'
import Create from './pages/create/Create'
import React, { useContext } from 'react'
import { userInputs, productInputs } from './formSource'
import Edit from './pages/edit/Edit'
import { DarkModeContext } from './context/darkModeContext'
import './style/dark.scss'
import Login from './pages/login/Login'
import Logout from './pages/logout/Logout'
import { ReactSession } from 'react-client-session'
import Nav from './components/nav/Nav'

function App() {
  const userUrl = `${process.env.REACT_APP_API_URL}users/`
  const productUrl = `${process.env.REACT_APP_API_URL}products/`
  const reviewsUrl = `${process.env.REACT_APP_API_URL}review/`
  const orderUrl = `${process.env.REACT_APP_API_URL}order/`
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/login'>
            <Route index element={<Login />} />
          </Route>
          <Route path='/' element={<Nav />}>
            <Route index element={<Dashboard nav={true} />} />
            {/*users */}
            <Route
              path='users'
              element={
                <User
                  nav={true}
                  type={'users'}
                  current={'users'}
                  url={userUrl}
                  showTitle={true}
                  selected={'users'}
                />
              }
            />
            <Route
              path='users/:id'
              element={
                <View
                  nav={true}
                  type={'users'}
                  url={userUrl}
                  selected={'users'}
                />
              }
            />
            <Route
              path='users/edit/:id'
              element={
                <Edit
                  nav={true}
                  inputs={userInputs}
                  url={userUrl}
                  title={'Edit User Details'}
                  selected={'users'}
                />
              }
            />
            <Route
              path='users/create'
              element={
                <Create
                  nav={true}
                  inputs={userInputs}
                  title={'Add New Users'}
                  selected={'users'}
                />
              }
            />
            {/*end users */}

            {/*products */}

            <Route
              path='products'
              element={
                <User
                  nav={true}
                  type={'products'}
                  url={productUrl}
                  showTitle={true}
                  selected={'products'}
                />
              }
            />

            <Route
              path='products/:id'
              element={
                <View
                  nav={true}
                  type={'products'}
                  url={productUrl}
                  selected={'products'}
                />
              }
            />
            <Route
              path='products/create'
              element={
                <Create
                  nav={true}
                  inputs={productInputs}
                  title={'Add New Users'}
                  selected={'products'}
                />
              }
            />

            {/*end products */}

            <Route
              path='reviews'
              element={
                <User
                  nav={true}
                  type={'reviews'}
                  url={reviewsUrl}
                  showTitle={false}
                  selected={'reviews'}
                />
              }
            />

            <Route
              path='reviews/:id'
              element={
                <View type={'reviews'} url={reviewsUrl} selected={'reviews'} />
              }
            />
            <Route
              path='Orders'
              element={
                <User
                  nav={true}
                  type={'orders'}
                  url={orderUrl}
                  showTitle={false}
                  selected={'orders'}
                />
              }
            />

            <Route
              path='orders/:id'
              element={
                <View
                  nav={true}
                  type={'orders'}
                  url={orderUrl}
                  selected={'orders'}
                />
              }
            />

            <Route path='logout' element={<Logout />} />
          </Route>
          <Route path='/admin'>
            <Route
              index
              element={<Dashboard current='dashboard' selected={'dashboard'} />}
            />
          </Route>
          <Route path='/admin/users'>
            <Route
              index
              element={
                <User
                  type={'users'}
                  current={'users'}
                  url={userUrl}
                  showTitle={true}
                  selected={'users'}
                />
              }
            />
            <Route
              path='/admin/users/:id'
              element={<View type={'users'} url={userUrl} selected={'users'} />}
            />
            <Route
              path='/admin/users/edit/:id'
              element={
                <Edit
                  url={userUrl}
                  inputs={userInputs}
                  title={'Edit User Details'}
                  selected={'users'}
                />
              }
            />
            <Route
              path='/admin/users/create'
              element={
                <Create
                  inputs={userInputs}
                  title={'Add New Users'}
                  selected={'users'}
                />
              }
            />
          </Route>
          <Route path='/admin/products'>
            <Route
              index
              element={
                <User
                  type={'products'}
                  url={productUrl}
                  showTitle={true}
                  selected={'products'}
                />
              }
            />
            <Route
              path='/admin/products/:id'
              element={
                <View
                  type={'products'}
                  url={productUrl}
                  selected={'products'}
                />
              }
            />
            <Route
              path='/admin/products/create'
              element={
                <Create
                  inputs={productInputs}
                  title={'Add New Users'}
                  selected={'products'}
                />
              }
            />
          </Route>
          <Route path='/admin/reviews'>
            <Route
              index
              element={
                <User
                  type={'reviews'}
                  url={reviewsUrl}
                  showTitle={false}
                  selected={'reviews'}
                />
              }
            />
            <Route
              path='/admin/reviews/:id'
              element={
                <View type={'reviews'} url={reviewsUrl} selected={'reviews'} />
              }
            />
          </Route>
          <Route path='/admin/orders'>
            <Route
              index
              element={
                <User
                  type={'orders'}
                  url={orderUrl}
                  showTitle={false}
                  selected={'orders'}
                />
              }
            />
            <Route
              path='/admin/orders/:id'
              element={
                <View type={'orders'} url={orderUrl} selected={'orders'} />
              }
            />
          </Route>
          <Route exact path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
