import React from 'react';
import { Container } from '../Container/Container';
import s from './Footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__line}></div>
        <p className={s.footer__text}>
          <span>{year}</span> © Made with love by me
        </p>
      </Container>
    </footer>
  );
};
