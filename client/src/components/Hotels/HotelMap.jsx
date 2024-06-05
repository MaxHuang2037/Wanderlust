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

import styles from './styles.module.css'
import { useEffect } from 'react';

import pinpng from "../../images/pin.png"

export const HotelMap = ({hotels}) => {

    useEffect(() => {
        let pins = []

        var iconStyle = new Style({
            image: new Icon({
                src: pinpng,
                scale: 0.05
            })
        })

        hotels.map((hotel) => {
            // console.log(hotel.long)
            const jeff = new Feature({
                geometry: new Point(fromLonLat([hotel.long, hotel.lat])),
                name: hotel.name,
                key: hotel.id
            })
            jeff.setStyle(iconStyle)
            pins.push(jeff)
            console.log("worky")
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

        const map = new Map({
            target: "map",
            layers: [osmLayer, vectorLayer],
            view: new View({
                center: [0, 0],
                zoom: 0
            })
        });

        /*
        click handeler, will make it a overlay later
            - Lune
        */
        
        map.on("click", (evt) => {
            const feature = map.forEachFeatureAtPixel(evt.pixel, 
                (feature) => {
                    return feature;
                });
            if (feature) {
                alert(feature.get("name"));
            }
        })

        return () => map.setTarget(null);
    }, [hotels]);


    return (
        <>
            <div className={styles.mapContainer} id="map"/>
        </>
    );
}