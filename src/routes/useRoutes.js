import { lazy, useCallback, useMemo } from 'react'
const Home = lazy(() => import('../presentation/home'))
const Admin = lazy(() => import('../presentation/admin'))
const Login = lazy(() => import('../presentation/login'))


const useRoutes = () => {

    const routes = useMemo(() => [
        {
            id: 'home',
            path: '/',
            element : <Home/>,
            isPublicallyAccess: true
        },
        {
            id: 'admin_login',
            path: '/admin',
            element : <Login/>,
            isAuth: true
        },
        {
            id: 'admin_dashboard',
            path: '/dashboard',
            element : <Admin/>,
            isAdmin: true,
            redirectUrl: '/'
        }
    ], [])
    
    const authRoutes = useCallback((isAuthRoute) => {
        return routes.filter(({ isAuth }) => isAuth === isAuthRoute)
    }, [routes])

    const publicRoutes = useCallback(() => {
        return routes.filter(({ isPublicallyAccess }) => isPublicallyAccess)
    }, [routes])

    const adminRoutes = useCallback((isPrivate) => {
        return routes.filter(({ isAdmin }) => isAdmin === isPrivate)
    }, [routes])

  return { routes, authRoutes, publicRoutes, adminRoutes }
}

export default useRoutes