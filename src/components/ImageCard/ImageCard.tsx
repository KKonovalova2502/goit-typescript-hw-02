import style from './ImageCard.module.css';

const ImageCard = ({ item, onImageClick }) => {
  const {
    created_at,
    urls: { small },
    alt_description,
    likes,
    user: { name, username },
  } = item;

  return (
    <div className={style.wrap}>
      <img
        className={style.img}
        src={small}
        alt={alt_description}
        onClick={() => onImageClick(item)}
        loading="lazy"
      />
      <div className={style.info}>
        <p>💬 {alt_description}</p>
        <p>
          👤 Author: {name} (@{username})
        </p>
        <p>
          🗓️ Published on:{' '}
          {new Date(created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>

        <p>❤️ {likes} likes</p>
      </div>
    </div>
  );
};

export default ImageCard;
