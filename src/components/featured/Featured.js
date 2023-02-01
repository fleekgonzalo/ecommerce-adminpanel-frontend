import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <div className='title'>Total Revenue</div>
        <MoreVertIcon />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <div className='title'>Total sale made today</div>
        <div className='amount'>$420</div>
        <div className='desc'>Prev transcation processing.</div>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult postive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult postive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
