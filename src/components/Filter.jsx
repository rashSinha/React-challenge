import React from "react";

const Filter = ({ searchText, onTextChange, onSubmit }) => {
  return (
    <div className="filter">
      <input
        className="search-input"
        value={searchText}
        placeholder="Search artists..."
        onChange={onTextChange}
      />
      <button className="search-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Filter;
