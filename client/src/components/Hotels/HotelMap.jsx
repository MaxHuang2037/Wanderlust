import 'ol/ol.css';
import {Map, View} from 'ol'
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import styles from './styles.module.css'
import { Point } from 'ol/geom/Point.js';

import { useEffect } from 'react';

export const HotelMap = ({hotels}) => {

    useEffect(() => {
        let pins = []

        hotels.map((hotel) => {
            pins.push(new Feature({
                geometry: new Point([hotel.long, hotel.lat]),
                name: hotel.name
            }))
        });

        const vectorSource = new VectorSource({
            features: pins
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource
        });

        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM()
        });

        const map = new Map({
            target: "map",
            layers: [osmLayer],
            view: new View({
                center: [0, 0],
                zoom: 0
            })
        });
        return () => map.setTarget(null);
    }, []);

    return (
        <div className={styles.mapContainer} id="map"/>
    );
}