"use client"
import React, {useState} from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

export interface AdvancedMarkerProps {
    title: string,
    position: {
        lat: number,
        lng: number,
    },
    children?: React.ReactNode,
}

export default function MarkerWithInfowindow({title, position, children} : AdvancedMarkerProps){
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={position}
        title={title}
      />
      {infowindowOpen && children && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}>
            {children}
        </InfoWindow>
      )}
    </>
  );
};