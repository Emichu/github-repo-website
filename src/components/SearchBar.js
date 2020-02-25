import React from 'react';

const SearchBar = (props) => {


  return (
    <div className="ui center aligned container">
      <div className="ui search">
        <div className="ui icon input">
          <input onChange={(event) => props.onChange(event.target.value.toLowerCase())} className="prompt" type="text" placeholder="Search repos..." />
          <i className="search icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;