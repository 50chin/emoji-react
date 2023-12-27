import React from 'react';
import s from './Card.module.scss';

export const Card = ({ symbol, title, keywords }) => {
  const uniqWords = (str) => {
    return [...new Set(str.split(' '))].join(' ');
  };
  return (
    <>
      <div className={s.card}>
        <h2 className={s.card__symbol}>{symbol}</h2>
        <p className={s.card__title}>{title}</p>
        <p className={s.card__keywords}>{uniqWords(keywords)}</p>
      </div>
    </>
  );
};
