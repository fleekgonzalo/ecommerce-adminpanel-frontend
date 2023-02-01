import React, { useState, useEffect } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { productColumns, userColumns, reviewsColumns } from '../../datasource'
import { Link } from 'react-router-dom'
import useDelete from '../../hooks/useDelete'

const DataTable = ({ rowsData, setUpdated, type, url, showTitle, nav }) => {
  const [deleteItem] = useDelete(url, type)
  const [cols, setCols] = useState([])

  useEffect(() => {
    switch (type) {
      case 'users':
        setCols((prev) => userColumns)
        return
      case 'products':
        setCols(productColumns)
        return
      case 'reviews':
        setCols(reviewsColumns)
        return
      default:
        return () => {}
    }
  }, [type])

  const deleteData = (id) => {
    deleteItem(id)
    setUpdated(true)
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='callAction'>
            <Link
              to={nav ? `/${type}/${params.row._id}` : `${params.row._id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => deleteData(params.row._id)}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        {showTitle ? `Add New ${type}` : `${type}`}

        {showTitle && (
          <Link
            className='link'
            to={nav ? `/${type}/create` : `/admin/${type}/create`}
            style={{ textDecoration: 'none' }}
          >
            Add New
          </Link>
        )}
      </div>

      <DataGrid
        aspect={3 / 1}
        className='datagrid'
        rows={rowsData}
        columns={cols.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(rowsData) => rowsData._id}
      />
    </div>
  )
}

export default DataTable
