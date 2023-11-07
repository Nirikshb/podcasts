import React from 'react';
import { useAuthState } from 'your-auth-library'; // Import your authentication library
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    // Use the useAuthState hook to check the user's authentication state
    const [user, loading, error] = useAuthState(auth);

    // Check the different conditions for rendering content
    switch (true) {
        case loading:
            // Display a loading message while authentication is in progress
            return <p>Loading....</p>;
        case !user || error:
            // If there is no user authenticated or an error occurred, redirect to the home page
            return <Navigate to="/" replace />;
        default:
            // If the user is authenticated and there are no errors, render the child routes (Outlet)
            return <Outlet />;
    }
};

export default PrivateRoutes;
