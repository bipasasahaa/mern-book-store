import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider'
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return
        <div className="text-left">
            <Spinner aria-label="Left-aligned spinner example" />
        </div>
    }
    if(user){
        return children;
    }

    return (
      <Navigate to = "/login" state={{from: location}} replace> </Navigate>
    )
}

export default PrivateRoute