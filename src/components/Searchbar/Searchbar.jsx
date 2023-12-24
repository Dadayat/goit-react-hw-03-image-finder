const Searchbar = ({ onSubmitSearchBar }) => (
  <div>
    <form onSubmit={onSubmitSearchBar}>
      <button>
        <span>Search</span>
      </button>

      <input
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
