import React from 'react';
import { Container } from '../Container/Container';
import s from './Footer.module.scss';

export const Footer = ({
  limitValue,
  setLimit,
  pageValue = 0,
  setPage,
  lastPage,
}) => {
  const year = new Date().getFullYear();
  let begin = 0;
  let end = 4;
  const changePage = (pageValue) => {
    let arr = [];

    if (pageValue + 3 > lastPage) pageValue = lastPage - 2;
    if (pageValue > 1) {
      begin = pageValue - 2;
      end = pageValue + 2;
    }
    for (let i = begin; i <= end; i++) {
      arr.push(i);
    }
    const btnNum = arr
      .filter((el) => el > -1)
      .map((number) => (
        <button
          onClick={() => {
            setPage(number);
            changePage(number);
          }}
          key={number}
          className={
            pageValue === number
              ? s.footer__cell + ' ' + s.footer__blue
              : s.footer__cell
          }
        >
          {number + 1}
        </button>
      ));
    return btnNum;
  };

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__line}>
          <div className={s.footer__wrapper}>
            <div className={s.footer__buttons}>
              <button
                className={s.footer__dis}
                disabled={pageValue === 0 ? true : false}
                onClick={() => setPage(0)}
              >
                First
              </button>
              {changePage(pageValue)}
              <button
                className={s.footer__dis}
                onClick={() => setPage(lastPage)}
                disabled={pageValue === lastPage ? true : false}
              >
                Last
              </button>
            </div>
            <div className={s.footer__select}>
              <p className={s.footer__text}>Per page</p>
              <select
                value={limitValue}
                onChange={(e) => {
                  setLimit(e.target.value);
                  setPage();
                }}
              >
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
              </select>
            </div>
          </div>
          <p className={s.footer__bottom}>
            <span>{year}</span> © Made with love by me
          </p>
        </div>
      </Container>
    </footer>
  );
};
