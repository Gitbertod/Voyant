import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import { Link, Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({children, allowedRoles}) => {
  const {user, loading} = useAuth();
  const location = useLocation();

    if(loading) return <h1>loading</h1>
    
    if(!user) return <Navigate to ="/login" state={{ from: location }} replace></Navigate>
  
    if(!allowedRoles.includes(user.role)) {
      const redirectPath = user.role === "admin" ? "/admin/dashboard" : "/user/dashboard";
      return <Navigate to={redirectPath} replace />;
    }

    return (
    <>
    {children}
    </>
  )
}

export default ProtectedRoute