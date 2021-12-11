import React, { useEffect, useState } from 'react';
import './Destination.css'
import bike from '../../images/Frame.png'
import peopleIcon from "../../images/peopleicon.png"
import { useParams } from 'react-router';
import MyMap from '../MyMap/MyMap';

const Destination = () => {
    const { name } = useParams();
    const [searched, setSearched] = useState(false);
    const [cityFrom, setCityFrom] = useState('');
    const [cityTo, setCityTo] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const [transports, setTransports] = useState([]);

    useEffect(() => {
        fetch('/transportation.json')
            .then(res => res.json())
            .then(data => setTransports(data))
            .catch(error => console.log(error))
    }, [])

    const selectedTransport = transports.filter(transport => transport.name === name);
    const selectedTransportObj = selectedTransport[0];

    const handleSearch = () => {
        setError('');
        if (cityFrom && cityTo && date) {
            setSearched(true);
        } else {
            setError('Please, Make sure you give all the information');
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
                    <p style={{ marginTop: '10px', textAlign:'center'}}><small style={{fontSize:'16px', color:'red', fontWeight:'600'}} >{error}</small></p>
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
                                    {
                                        selectedTransportObj?.photo ? <img className="transport-icon" src={selectedTransportObj?.photo} alt="transport" /> : <img className="transport-icon" src={bike} alt="transport" />
                                    }

                                </div>
                                <div className="transport-name">
                                    {
                                        selectedTransportObj?.name ? <p>{selectedTransportObj?.name}</p> : <p>Bike</p>
                                    }
                                </div>
                                <div className="people-icon">
                                    <img className='people-icon' src={peopleIcon} alt="peopleIcon" />
                                </div>
                                <div className="people-number">
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="price">
                                {
                                    selectedTransportObj?.single ? <p>${selectedTransportObj?.single}</p> : <p>$69</p>
                                }
                            </div>
                        </div>
                        <div className="capacity">
                            <div className="transport">
                                <div className="transport-icon">
                                    {
                                        selectedTransportObj?.photo ? <img className="transport-icon" src={selectedTransportObj?.photo} alt="transport" /> : <img className="transport-icon" src={bike} alt="transport" />
                                    }

                                </div>
                                <div className="transport-name">
                                    {
                                        selectedTransportObj?.name ? <p>{selectedTransportObj?.name}</p> : <p>Bike</p>
                                    }
                                </div>
                                <div className="people-icon">
                                    <img className='people-icon' src={peopleIcon} alt="peopleIcon" />
                                </div>
                                <div className="people-number">
                                    <p>2</p>
                                </div>
                            </div>
                            <div className="price">
                                {
                                    selectedTransportObj?.double ? <p>${selectedTransportObj?.double}</p> : <p>$120</p>
                                }
                            </div>
                        </div>
                        <div className="capacity">
                            <div className="transport">
                                <div className="transport-icon">
                                    {
                                        selectedTransportObj?.photo ? <img className="transport-icon" src={selectedTransportObj?.photo} alt="transport" /> : <img className="transport-icon" src={bike} alt="transport" />
                                    }

                                </div>
                                <div className="transport-name">
                                    {
                                        selectedTransportObj?.name ? <p>{selectedTransportObj?.name}</p> : <p>Bike</p>
                                    }
                                </div>
                                <div className="people-icon">
                                    <img className='people-icon' src={peopleIcon} alt="peopleIcon" />
                                </div>
                                <div className="people-number">
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="price">
                                {
                                    selectedTransportObj?.family ? <p>${selectedTransportObj?.family}</p> : <p>$180</p>
                                }
                            </div>
                        </div>
                    </div>}
            </div>
            <div className="map">
                <MyMap></MyMap>
            </div>
        </div>
    );
};

export default Destination;