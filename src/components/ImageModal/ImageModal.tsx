import Modal from 'react-modal';
import style from './ImageModal.module.css';
import { Image } from '../App/App.types';

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

const ImageModal = ({ image, isOpen, onRequestClose }:ImageModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description ?? 'Image'}
          className={style.modalImage}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
