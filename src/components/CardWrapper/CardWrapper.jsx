import React from 'react';
import s from './CardWrapper.module.scss';
import { Card } from '../Card/Card';

export const CardWrapper = ({ cards }) => {
  return (
    <div className={s.cardWrapper}>
      {cards.map((el) => (
        <Card
          key={el.title}
          symbol={el.symbol}
          title={el.title}
          keywords={el.keywords}
        />
      ))}
    </div>
  );
};
