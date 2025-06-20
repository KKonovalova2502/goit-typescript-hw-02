import { SyncLoader } from 'react-spinners';
import style from './Loader.module.css';
import { FC } from 'react';

const Loader: FC = () => (
  <div className={style.wrapper}>
    <SyncLoader color="#ffbb3c" />
  </div>
);

export default Loader;
