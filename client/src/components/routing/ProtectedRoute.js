import React, { Component } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import {Route, Redirect} from 'react-router-dom'
const ProtectedRoute = ({ component: Component, ...rest }) => {
  
    const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)
  
    return (
        <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
                <>
                    
                    <Component {...rest} {...props} />
                </>
            ) : (
                <Redirect to='/login' />
            )
        }
    />
  )
}

export default ProtectedRoute