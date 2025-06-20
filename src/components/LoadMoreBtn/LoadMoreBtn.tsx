import { FC } from 'react';
import style from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  incrementPage: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ incrementPage }) => {
  return (
    <>
      <button
        className={style.loadMoreBTN}
        type="button"
        onClick={incrementPage}
      >
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
