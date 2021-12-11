import React, { useEffect, useState } from 'react';
import './Destination.css'
import map from '../../images/Map.png'
import car from '../../images/Frame-1.png'
import peopleIcon from "../../images/peopleicon.png"
import { useParams } from 'react-router';
import MyMap from '../MyMap/MyMap';

const Destination = () => {
    const { name } = useParams();
    const [searched, setSearched] = useState(false);
    const [cityFrom, setCityFrom] = useState('');
    const [cityTo, setCityTo] = useState('');
    const [date, setDate] = useState('');
    const [transports, setTransports] = useState([]);

    useEffect(() => {
        fetch('/transportation.json')
            .then(res => res.json())
            .then(data => setTransports(data))
            .catch(error => console.log(error))
    }, [])

    const selectedTransport = transports.filter( transport => transport.name === name);
    const selectedTransportObj = selectedTransport[0];
    console.log(selectedTransportObj?.id);

    const handleSearch = () => {
        if (cityFrom && cityTo && date) {
            setSearched(true);
            console.log('Searching')
        } else {
            console.log('Please, Make sure you give all the information')
        }

    }
    const handleInput = (e) => {
        const { name, value } = e.currentTarget;
        if (name === "from") {
            setCityFrom(value)
        } else if (name === "to") {
            setCityTo(value);
        } else if (name === "date") {
            setDate(value);
        }
    }


    return (
        <div className="destination">
            <div className="search-area">
                {!searched ? <div className="search">
                    <label htmlFor="from">From</label><br />
                    <input onBlur={handleInput} className="search-input" placeholder="Enter City Name" type="text" name="from" id="form" /><br />
                    <label htmlFor="to">To</label><br />
                    <input onBlur={handleInput} className="search-input" placeholder="Enter City Name" type="text" name="to" id="to" /><br />
                    <label htmlFor="Date">Journey Date</label>
                    <input onBlur={handleInput} className="search-input" type="date" name="date" id="date" /><br />
                    <button onClick={handleSearch} className="search-btn">Search</button>
                </div> :
                    <div className="search-result-area search">
                        <div className="route">
                            <ul>
                                <li><span></span>{cityFrom}</li>
                                <li><span></span>{cityTo}</li>
                            </ul>
                            <p>Journey Date: {date} </p>
                        </div>
                        <div className="capacity">
                            <div className="transport">
                                <div className="transport-icon">
                                    <img className="transport-icon" src={selectedTransportObj?.photo} alt="transport" />
                                </div>
                                <div className="transport-name">
                                    <p>{selectedTransportObj?.name}</p>
                                </div>
                                <div className="people-icon">
                                    <img className='people-icon' src={peopleIcon} alt="peopleIcon" />
                                </div>
                                <div className="people-number">
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="price">
                                <p>${selectedTransportObj?.single}</p>
                            </div>
                        </div>
                        <div className="capacity">
                            <div className="transport">
                                <div className="transport-icon">
                                    <img className="transport-icon" src={selectedTransportObj?.photo} alt="transport" />
                                </div>
                                <div className="transport-name">
                                    <p>{selectedTransportObj?.name}</p>
                                </div>
                                <div className="people-icon">
                                    <img className='people-icon' src={peopleIcon} alt="peopleIcon" />
                                </div>
                                <div className="people-number">
                                    <p>2</p>
                                </div>
                            </div>
                            <div className="price">
                                <p>${selectedTransportObj?.double}</p>
                            </div>
                        </div>
                        <div className="capacity">
                            <div className="transport">
                                <div className="transport-icon">
                                    <img className="transport-icon" src={selectedTransportObj?.photo} alt="transport" />
                                </div>
                                <div className="transport-name">
                                    <p>{selectedTransportObj?.name}</p>
                                </div>
                                <div className="people-icon">
                                    <img className='people-icon' src={peopleIcon} alt="peopleIcon" />
                                </div>
                                <div className="people-number">
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="price">
                                <p>${selectedTransportObj?.family}</p>
                            </div>
                        </div>
                    </div>}
            </div>
            <div className="map">
                {/* <img src={map} alt="map" /> */}
                <MyMap></MyMap>
            </div>
        </div>
    );
};

export default Destination;