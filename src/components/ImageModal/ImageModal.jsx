import Modal from 'react-modal';
import style from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, isOpen, onRequestClose }) => {
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
          alt={image.alt_description}
          className={style.modalImage}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
