import { FC } from 'react';
import { Image } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, onImageClick }) => {
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
