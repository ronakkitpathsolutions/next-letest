import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import withAdmin from '../hoc/withAdmin'

const AdminLayout = ({ ...props }) => <WithAdminOutlet {...props} replace {...{ to: '/' }} />
export default AdminLayout

const WithAdminOutlet = withAdmin(Outlet, Navigate)