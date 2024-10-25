import React, { useContext } from 'react'
import FetchUser, { UserContext } from '../utils/userContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const { user } = useContext(UserContext);
    return user ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default PrivateRoute