import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, onClickImageItem }) => (
  <div>
    {photos.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem
        id={id}
        tags={tags}
        smallUrl={webformatURL}
        onClickImageItem={onClickImageItem}
      />
    ))}
  </div>
);

export { ImageGallery };
