import { useEffect, useState } from 'react';
import { fetchImages } from '../../images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { Image } from './App.types';



export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleSubmit = async (newTopic: string) => {
    setTopic(newTopic);
    setCurrentPage(1);
    setImages([]);
  };

  const incrementPage = (): void => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (topic === '') {
      return;
    }

    async function fetchData():Promise<void> {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(topic, currentPage);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentPage, topic]);

  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setIsOpenModal(true);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
    setIsOpenModal(false);
  };

  const lastPages = currentPage === totalPages;
  const hasImages = images.length > 0;

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {hasImages && <ImageGallery items={images} onImageClick={openModal} />}
      {loading && <Loader />}
      {hasImages && !loading && !lastPages && (
        <LoadMoreBtn incrementPage={incrementPage} />
      )}
      <ImageModal
        image={selectedImage}
        isOpen={isOpenModal}
        onRequestClose={closeModal}
      />
    </div>
  );
}
