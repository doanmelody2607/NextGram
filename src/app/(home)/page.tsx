import Link from 'next/link';
import swagPhotos from '@/data/photos';
import Image from 'next/image';
import { IPhoto } from '@/shared/interfaces/photo-interface';

export default function Home() {
    const photos: IPhoto[] = swagPhotos;

    return (
        <main className="container mx-auto">
            <h1 className="text-center text-4xl font-bold m-10">Doan Vu NextJS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
                {photos.map(({ id, imageSrc }) => {
                    console.log(imageSrc);
                    return (
                        <Link key={id} href={`/photos/${id}`}>
                            <Image
                                alt=""
                                src={imageSrc}
                                height={500}
                                width={500}
                                className="w-full object-cover aspect-square"
                                quality={75}
                                priority={false}
                            />
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
