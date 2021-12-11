import React, { useEffect, useState } from 'react';
import './Home.css'
import Transportation from '../Transportation/Transportation';

const Home = () => {
    const [transports, setTransports] = useState([]);
    useEffect(() => {
        fetch('./transportation.json')
            .then(res => res.json())
            .then(data => setTransports(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="home">
            <div className="card-area">
                {
                    transports.map(transport => <Transportation key={transport.id} transport={transport}></Transportation>)
                }        

            </div>
        </div>
    );
};

export default Home;