import Photo from '@/components/Frame';
import Modal from '@/components/Modal';
import swagPhotos from '@/data/photos';

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
    const photos = swagPhotos;
    const photo = photoId && photos.find((p) => p.id === photoId);

    if (!photo) return <h2>Photo does not found</h2>;

    return (
        <Modal>
            <Photo photo={photo} />
        </Modal>
    );
}
