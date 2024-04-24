'use client'
import React, { useRef } from 'react';
import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';
import { ISizeCalculationResult } from 'image-size/dist/types/interface';


const MyLightGallery = ({ data, item, idx, photoSpans, dimensions } : {data: any, item: any, idx: any, photoSpans: any, dimensions: ISizeCalculationResult}) => {

    const lightboxRef = useRef<LightGallery | null>(null);

    return (
        <>
            <div key={item.name} className="w-[250px] justify-self-center px-3" style={{ gridRow: `span ${photoSpans}` }}>
                <div className="rounded-xl overflow-hidden group">
                    <Image
                        src={item.link}
                        alt={item.name}
                        width={dimensions.width}
                        height={dimensions.height}
                        sizes="250px"
                        className="object-cover group-hover:opacity-75"
                        onClick={() => {
                            lightboxRef.current?.openGallery(idx);
                        }}
                    />
                </div>     
                <LightGalleryComponent
                    onInit={(ref) => {
                        if (ref) {
                            lightboxRef.current = ref.instance;
                        }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={data.map((item: any) => ({
                        src: item.link,
                        thumb: item.link,
                    }))}
                />
            </div>
        </>
    );
};

export default MyLightGallery;
