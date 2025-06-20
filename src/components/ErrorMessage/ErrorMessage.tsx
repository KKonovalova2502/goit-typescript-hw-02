import { FC } from 'react';
import style from './ErrorMessage.module.css';

const ErrorMessage:FC = () => {
  return (
    <div className={style.errorContainer}>
      <img
        src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6884557/Screen_Shot_2016-08-03_at_11.08.01_AM.0.png?quality=90&strip=all&crop=0,0,100,100&_gl=1*1qyjayf*_ga*MTAwNDQzNjE1OS4xNzQ2NjA5NzU5*_ga_C3QZPB4GVE*czE3NDY2MDk3NTgkbzEkZzEkdDE3NDY2MDk4MzUkajAkbDAkaDA"
        alt="Error dog meme"
        className={style.image}
      />
      <p className={style.text}>Just try again!</p>
    </div>
  );
};

export default ErrorMessage;
