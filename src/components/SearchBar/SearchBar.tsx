import axios from 'axios';
import toast from 'react-hot-toast';
import style from './SearchBar.module.css';
import { FC, FormEvent } from 'react';

interface SearchBarProps {
  onSubmit: (newTopic: string) => void;
}

const notify = () =>
  toast.error("C'mon, don't be shy. Tell us what you're looking for!");

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = form.elements.namedItem('topic') as HTMLInputElement;
const value = topic.value.trim();


    if (!value) {
      notify();
      return;
    }
    onSubmit(value);
    form.reset();
  };
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button className={style.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
