import axios from 'axios';
import toast from 'react-hot-toast';
import style from './SearchBar.module.css';

const notify = () =>
  toast.error("C'mon, don't be shy. Tell us what you're looking for!");

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();

    if (!topic) {
      notify();
      return;
    }
    onSubmit(topic);
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
