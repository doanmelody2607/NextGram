import React from 'react';
import Photo from '@/components/Frame';
import swagPhotos from '@/data/photos';

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
    const photo = swagPhotos.find((p) => p.id === id);

    if (!photo) return <h2>Photo does not found</h2>;

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Photo photo={photo} />
            </div>
        </div>
    );
}
