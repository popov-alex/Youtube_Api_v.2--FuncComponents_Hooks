import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <label className="ui field">Search Videos</label>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
