export function Searchbar({ onSubmit }) {
  const inputSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.SearchInput.value;
    onSubmit(inputValue);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={inputSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="SearchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
