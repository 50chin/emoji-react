import React from 'react';
import s from './SearchBar.module.scss';

export const SearchBar = ({ placeholder, searchHandler, searchValue }) => {
  return (
    <input
      className={s.input}
      type="text"
      value={searchValue}
      placeholder={placeholder}
      onChange={searchHandler}
    />
  );
};
