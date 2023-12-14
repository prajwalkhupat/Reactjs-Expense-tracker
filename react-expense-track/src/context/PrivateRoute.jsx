import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const PrivateRoute = ({IdToken,children}) => {
    if (IdToken)
        return children
    else {
        toast('Please Login first.')
        return <Navigate to='/auth' />

    }
}

export default PrivateRoute