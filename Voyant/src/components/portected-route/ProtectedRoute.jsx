import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import { Link, Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {user, loading} = useAuth();

    if(loading) return <h1>loading</h1>
    
    if(!user) return <Navigate to ="/login"></Navigate>
  
    return (
    <>
    {children}
    </>
  )
}

export default ProtectedRoute