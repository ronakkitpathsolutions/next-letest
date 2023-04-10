import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicLayout = ({ isDefaultAccess, ...props }) => {
    return isDefaultAccess ? <Outlet {...props} /> : <Navigate to='/' replace />
}

export default PublicLayout