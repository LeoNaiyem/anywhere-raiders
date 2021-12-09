import React, { useContext } from 'react';
import { UserContext } from '../../App';


const Contact = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="error">
            <p>Name: {loggedInUser.displayName}</p>
            <p>Email: {loggedInUser.email} </p>
            <h1>Contact Coming soon!</h1>
        </div>
    );
};

export default Contact;