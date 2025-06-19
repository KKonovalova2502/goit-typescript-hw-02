import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ incrementPage }) => {
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
