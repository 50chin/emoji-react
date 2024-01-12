import React from 'react';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { Container } from '../Container/Container';
import s from './Main.module.scss';

export const Main = ({ cards, selectLimit }) => {
  return (
    <main className={s.main}>
      <Container>
        <CardWrapper cards={cards} selectLimit={selectLimit} />
      </Container>
    </main>
  );
};
