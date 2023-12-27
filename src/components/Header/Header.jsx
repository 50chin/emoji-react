import React from 'react';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.header__title}>Emoji Finder</h1>
      <p className={s.header__subtitle}>Find emoji by keywords</p>
    </header>
  );
};
