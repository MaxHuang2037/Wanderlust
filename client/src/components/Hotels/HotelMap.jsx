import 'ol/ol.css';
import {Map, View} from 'ol'
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import Point from 'ol/geom/Point.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import Feature from 'ol/Feature.js';
import { Icon, Style } from "ol/style";
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay.js';

import styles from './styles.module.css'
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import pinpng from "../../images/pin.png"

export const HotelMap = ({hotels}) => {
    let centerLong = 0;
    let centerLat = 0;

    let pins = []

    var iconStyle = new Style({
        image: new Icon({
            src: pinpng,
            scale: 0.05
        })
    })
    hotels.forEach((hotel) => {
        // console.log(hotel.long)
        if (centerLong == 0 && centerLat == 0) {
            centerLong = hotel.long;
            centerLat = hotel.lat;
        }
        else {
            centerLong += hotel.long;
            centerLat += hotel.lat;

            centerLong = centerLong / 2;
            centerLat = centerLat / 2;
        }

        const jeff = new Feature({
            geometry: new Point(fromLonLat([hotel.long, hotel.lat])),
            name: hotel.name,
            key: hotel.id
        })
        jeff.setStyle(iconStyle)
        pins.push(jeff)
    });

    const vectorSource = new VectorSource({
        features: pins
    });
    const vectorLayer = new VectorLayer({
        source: vectorSource,
    });
    const osmLayer = new TileLayer({
        preload: Infinity,
        source: new OSM()
    });

    /*
    overlay
    */

    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');
    const popup = new Overlay({
        element: container,
        autoPan: {
            animation: {
                duration: 250
            }
        }
    });

    /*
    search geo function
    */

    const geoSearch = () => {
        return(
            <button>
                Search here
            </button>
        )        
    }

    const searchButton = document.createElement('button')

    useEffect(() => {
        const map = new Map({
            target: "map",
            layers: [osmLayer, vectorLayer],
            view: new View({
                center: fromLonLat([centerLong, centerLat]),
                zoom: (centerLong == 0 && centerLat == 0) ? 0 : 13
            }),
            overlays: [popup]
        });

        /*
        click handeler, will make it a overlay later
            - Lune
        */
        
        const element = popup.getElement();
        map.on("click", (evt) => {
            const feature = map.forEachFeatureAtPixel(evt.pixel, 
                (feature) => {
                    return feature;
                });

            if (feature) {
                // console.log(evt.coordinate)
                popup.setPosition(evt.coordinate); // GAY LINE
                content.innerHTML = feature.get("name");
            }
        })

        return () => map.setTarget(null);
    }, [hotels, container]);


    return (
        <>
            <div className={styles.mapContainer} id="map"/>
            <div id="popup" class="ol-popup" className={styles.popupContainer}>
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </>
    );
}