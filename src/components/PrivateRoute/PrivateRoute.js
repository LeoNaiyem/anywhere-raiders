import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return loggedInUser.email ? children : <Navigate to="/signUp" state={{ from: location }} />;
};

export default PrivateRoute;