import Image from 'next/image';
import { IPhoto } from '@/shared/interfaces/photo-interface';

export default function Frame({ photo }: { photo: IPhoto }) {
    return (
        <>
            <Image
                alt=""
                src={photo.imageSrc}
                height={600}
                width={600}
                className="w-full object-cover aspect-square col-span-2"
            />

            <div className="bg-white p-4 px-6">
                <h3 className="text-blue-500">{photo.name}</h3>
                <p>
                    Taken by <span className="text-red-500 underline">{photo.username}</span>
                </p>
            </div>
        </>
    );
}
