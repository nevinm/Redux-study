import React, { useCallback, useState } from "react";

const Item = React.memo(({ name }) => {
  return <p>{name}</p>;
});

export const SearchBar = ({ items }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = useCallback((e) => {
    setSearchValue(e.target.value);
    const updatedItems = items.filter((currentItem) => {
      return currentItem.name
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase());
    });

    setFilteredItems(updatedItems);
  }, []);

  return (
    <div className="search-bar-container">
      <input onChange={handleSearch} type="text" value={searchValue} />
      {filteredItems.map(({ name, id }) => {
        return <Item key={id} name={name} />;
      })}
    </div>
  );
};
