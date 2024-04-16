"use client"
import {APIProvider, AdvancedMarker, Map, Marker} from '@vis.gl/react-google-maps';
import MarkerWithInfowindow from './MarkerWithInfoWindow';

export default function GoogleMaps({apiKey} : {apiKey: string}){
    return (
        <div className='w-full h-full flex justify-center items-center  '>
            <APIProvider apiKey={apiKey}>
                <Map
                    style={{width: '100%', height: '100%'}}
                    defaultCenter={{lat: 51.946736, lng: 15.519100}}
                    defaultZoom={18}
                    gestureHandling={'greedy'}
                    disableDefaultUI={false}
                >
                    <MarkerWithInfowindow
                        title='CKZiU Elektronik'
                        position={{lat: 51.946736, lng: 15.519100}}
                    >
                        {"ZSEiS Elektronik"}
                        {/* dodac cos jeszcze */}
                    </MarkerWithInfowindow>
                </Map>
            </APIProvider>
        </div>
    )
}