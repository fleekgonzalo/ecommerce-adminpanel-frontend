import React, { useState } from 'react'

const createData = {}

export const userInputs = [
  {
    id: 1,
    label: 'Username',
    type: 'text',
    placeholder: 'john_doe',
    name: 'username',
    value: createData.username,
  },
  {
    id: 2,
    label: 'Name and surname',
    type: 'text',
    placeholder: 'John Doe',
    name: 'name',
    value: createData.name,
  },
  {
    id: 3,
    label: 'Email',
    type: 'mail',
    placeholder: 'john_doe@gmail.com',
    name: 'email',
    value: createData.email,
  },
  {
    id: 4,
    label: 'Phone',
    type: 'text',
    placeholder: '+1 234 567 89',
    name: 'phone',
    value: createData.phone,
  },
  {
    id: 5,
    label: 'Password',
    type: 'password',
    name: 'password',
    value: createData.password,
  },
  {
    id: 6,
    label: 'Address',
    type: 'text',
    placeholder: 'Elton St. 216 NewYork',
    name: 'address',
    value: createData.address,
  },
  {
    id: 7,
    label: 'Country',
    type: 'text',
    placeholder: 'USA',
    name: 'country',
    value: createData.country,
  },
]

export const productInputs = [
  {
    id: 1,
    label: 'Name',
    type: 'name',
    name: 'name',
    placeholder: 'Apple Macbook Pro',
  },
  {
    id: 2,
    label: 'Description',
    type: 'text',
    placeholder: 'Description',
    name: 'description',
  },
  {
    id: 3,
    label: 'Category',
    type: 'text',
    placeholder: 'Computers',
    name: 'category',
  },
  {
    id: 4,
    label: 'Price',
    type: 'text',
    placeholder: '100',
    name: 'price',
  },
  {
    id: 5,
    label: 'Stock',
    type: 'text',
    placeholder: 'in stock',
    name: 'stock',
  },
  {
    id: 6,
    label: 'Rating',
    type: 'text',
    placeholder: 'Rate out of 5',
    name: 'rating',
  },
  {
    id: 7,
    label: 'Color',
    type: 'text',
    placeholder: 'Color',
    name: 'color',
  },
  {
    id: 8,
    label: 'Company',
    type: 'text',
    placeholder: 'company',
    name: 'company',
  },
  {
    id: 9,
    label: 'Featured',
    type: 'checkbox',
    name: 'featured',
  },
  {
    id: 10,
    label: 'FreeShipping',
    type: 'checkbox',
    name: 'freeshipping',
  },
]
