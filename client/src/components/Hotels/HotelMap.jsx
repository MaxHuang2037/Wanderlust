import 'ol/ol.css';
import {Map, View} from 'ol'
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import Point from 'ol/geom/Point.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import Feature from 'ol/Feature.js';
import { Icon, Style } from "ol/style";

import styles from './styles.module.css'
import { useEffect } from 'react';

import important from "../../images/important.png"

export const HotelMap = ({hotels}) => {

    useEffect(() => {
        let pins = []

        var iconStyle = new Style({
            image: new Icon({
                src: important,
                scale: 0.2
            })
        })

        hotels.map((hotel) => {
            // console.log(hotel.long)
            const jeff = new Feature({
                geometry: new Point([hotel.long, hotel.lat]),
                name: hotel.name,
                key: hotel.id
            })
            // jeff.setStyle(iconStyle)
            pins.push(jeff)
            console.log("worky")
        });
        console.log(pins)

        // const joe = new Feature({
        //     geometry: new Point([0, 0]),
        //     name: "for fucks sake"
        // });

        // joe.setStyle(iconStyle)

        const vectorSource = new VectorSource({
            features: pins
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource,
            // style: {
            //     "fill-color": "red",
            //     "stroke-color": "black",
            //     "stroke-width": 1.25,
            //     "radius": 5
            // }
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
        return () => map.setTarget(null);
    }, [hotels]);

    return (
        <>
        <div className={styles.mapContainer} id="map"/>
        <img src={important}/>
        </>
    );
}