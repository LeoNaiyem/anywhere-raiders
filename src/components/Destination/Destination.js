import React from 'react';
import './Destination.css'
import map from '../../images/Map.png'

const Destination = () => {
    return (
        <div className="destination">
            <div className="search-area">
                <div className="search">
                    <label htmlFor="from">From</label><br />
                    <input className = "search-input" placeholder ="Enter City Name" type="text" name="from" id="form" /><br />
                    <label htmlFor="to">To</label><br />
                    <input className = "search-input" placeholder ="Enter City Name"  type="text" name="to" id="to" /><br />
                    <label htmlFor="Date">Journey Date</label>
                    <input className = "search-input" type="date" name="date" id="date" /><br />
                    <button className ="search-btn">Search</button>
                </div>
            </div>
            <div className="map">
                <img src={map} alt="map" />
            </div>
        </div>
    );
};

export default Destination;