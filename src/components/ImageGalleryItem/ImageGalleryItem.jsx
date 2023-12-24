import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, smallUrl, tags, onClickImageItem }) => (
  <div key={id} data-id={id} onClick={onClickImageItem}>
    <img src={smallUrl} alt={tags} data-id={id} />
  </div>
);

export { ImageGalleryItem };
