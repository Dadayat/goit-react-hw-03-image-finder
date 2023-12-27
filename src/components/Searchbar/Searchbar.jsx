import css from './Searchbar.module.css';

const Searchbar = ({ onSubmitSearchBar }) => (
  <div className={css.searchbar}>
    <form onSubmit={onSubmitSearchBar} className={css.searchForm}>
      <button className={css.searchFormBtn}>
        <span className={css.searchFormBtnSpan}></span>
      </button>

      <input
        className={css.searchFormInput}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </div>
);

export { Searchbar };
