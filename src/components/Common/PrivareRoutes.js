import React from 'react';
import { useAuthState } from 'your-auth-library'; // Import your auth library
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const [user, loading, error] = useAuthState(auth);

    switch (true) {
        case loading:
            return <p>Loading....</p>;
        case !user || error:
            return <Navigate to="/" replace />;
        default:
            return <Outlet />;
    }
};

export default PrivateRoutes;
