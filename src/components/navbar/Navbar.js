import React, { useContext } from 'react'
import './navbar.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import { DarkModeContext } from '../../context/darkModeContext'

const Navbar = ({ page }) => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
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
              <div>Sushil</div>
              <div>sushil@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
