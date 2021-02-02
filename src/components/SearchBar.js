const SearchBar = (props) => {
  return (
    <input
      placeholder="What movie are you looking for?"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
