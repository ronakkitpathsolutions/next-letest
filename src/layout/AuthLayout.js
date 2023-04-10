import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import withAuth from '../hoc/withAuth'

const AuthLayout = ({ isLoggedIn, ...props }) => <WithAuthOutlet {...props} replace {...{ to: '/' }} />
export default AuthLayout

const WithAuthOutlet = withAuth(Outlet, Navigate)