import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={style.gallery}>
      {items.map((item) => (
        <li className={style.item} key={item.id}>
          <ImageCard item={item} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
