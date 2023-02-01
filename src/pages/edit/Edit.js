import React, { useState, useEffect } from 'react'
import './edit.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import useFind from '../../hooks/useFind'
import { useParams } from 'react-router-dom'

const Edit = ({ inputs, title, nav, userUrl }) => {
  const { id } = useParams()
  const type = 'users'
  const [file, setFile] = useState('')
  const [data, getSingle, error, loading] = useFind(userUrl, type)
  const [userData, setUserData] = useState({
    name: '',
    role: '',
    email: '',
  })

  let text = null

  useEffect(() => {
    getSingle(id)
  }, [id])

  useEffect(() => {
    setUserData(data)
  }, [])

  const handleInput = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='edit'>
      {nav ? '' : <Sidebar />}
      <div className='editContainer'>
        {nav ? '' : <Navbar />}
        <div className='editTop'>{title}</div>
        <div className='editBottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : `https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg`
              }
              alt='avatar'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label>
                  Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              {inputs.map((input) => {
                text = input.name
                return (
                  <div className='formInputs' key={input.id}>
                    <label>{input.label}</label>
                    <input
                      name={input.name}
                      type={input.type}
                      value={userData}
                      placeholder={input.placeholder}
                      onChange={handleInput}
                    ></input>
                  </div>
                )
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
