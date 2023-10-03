import React from 'react'

const PrivareRoutes = () => {
    const [user, loading, error] = useAuthState(auth);

    if(loading) {
        return <p>Loading....</p>;
    }else if (!user || error) {
        return <Navigate to="/" replace />;
    } else {
        return <Outlet />;
    };
};

export default PrivareRoutes;