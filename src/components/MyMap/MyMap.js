import React, { useRef, useState } from 'react';
import './MyMap.css'
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import osm from '../MyMap/oms-providers'

const MyMap = () => {
    const [center, setCenter] = useState( {lat:  23.777176 , lng: 90.399452} );
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    return (
        <>
            <div className="myMap" ref = {mapRef} >
                <MapContainer
                    center = {center}
                    zoom = {ZOOM_LEVEL}
                    // ref = {mapRef}
                >
                    <TileLayer url= {osm.maptiler.url} attribution= {osm.maptiler.attribution} />
                </MapContainer>
            </div>
        </>
    );
};

export default MyMap;