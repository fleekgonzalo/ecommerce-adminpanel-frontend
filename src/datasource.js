export const userColumns = [
  //{ field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'Name',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img
            className='cellImg'
            src='https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'
            alt='avatar'
          />
          {params.row.name}
        </div>
      )
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'role',
    headerName: 'Role',
    width: 100,
  },
  /*{
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    },
  },*/
]

export const productColumns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img
            className='cellImg'
            src='https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'
            alt='avatar'
          />
          {params.row.name}
        </div>
      )
    },
  },

  {
    field: 'category',
    headerName: 'Category',
    width: 100,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },

  {
    field: 'company',
    headerName: 'Company',
    width: 100,
  },
  {
    field: 'color',
    headerName: 'Color',
    width: 100,
  },
  {
    field: 'inventory',
    headerName: 'Inventory',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 100,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    width: 100,
  },

  /*{
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    },
  },*/
]

export const reviewsColumns = [
  {
    field: 'name',
    headerName: 'Product Name',
    width: 150,
    renderCell: (params) => {
      return <span>{params.row.product.name}</span>
    },
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
  },
  {
    field: 'comment',
    headerName: 'Comment',
    width: 200,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    width: 100,
  },
]
