"use client";
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

export const Map = ({x, y}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const initialLocation = [x, y];
      const initialZoom = 15;

      if (typeof window !== 'undefined') {
        const L = require('leaflet');

        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
        }

        const map = L.map(mapRef.current).setView(initialLocation, initialZoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);

        const customIconUrl =
          'https://cdn.discordapp.com/attachments/736993448124481619/1158474855801442325/map-marker.png';

        const customIcon = L.icon({
          iconUrl: customIconUrl,
          iconSize: [20, 32],
          iconAnchor: [16, 32],
        });

        const centerMarker = L.marker(initialLocation, { icon: customIcon }).addTo(map);

        mapInstanceRef.current = map;
      }
    }
  }, []);

  return <div className="mb-4" style={{ height: '300px', width: '400px' }} ref={mapRef}></div>;
};

