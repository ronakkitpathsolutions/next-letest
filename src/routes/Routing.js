import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../layout/PublicLayout'
import useRoutes from './useRoutes'
import AuthLayout from '../layout/AuthLayout'
import AdminLayout from '../layout/AdminLayout'

const Routing = ({...props}) => {
    
    const { authRoutes, publicRoutes, adminRoutes } = useRoutes()

  return (
    <Routes {...props} >
         <Route path='/' element={<PublicLayout isDefaultAccess />} >
            { publicRoutes().map(({id, ...data}) => <Route index key={id} {...data} />) }
         </Route>
         <Route path='/' element={<AuthLayout />} >
            { authRoutes(true).map(({id, ...data}) => <Route index key={id} {...data} />) }
         </Route>
         <Route path='/' element={<AdminLayout />} >
            { adminRoutes(true).map(({id, ...data}) => <Route index key={id} {...data} />) }
         </Route>
    </Routes>
  )
}

export default Routing