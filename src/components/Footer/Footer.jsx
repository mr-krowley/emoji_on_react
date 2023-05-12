import React from 'react'
import style from "./Footer.module.css"
import { PerPage } from '../PerPage/PerPage';
import { Pagination } from '../Pagination/Pagination';

export const Footer = ({
  setPerPage,
  pages,
  setCurrentPage,
  lastButtonIndex,
  firstButtonIndex,
  currenPage
}) => {
  return (
    <footer className={style.Footer}>
      <p className={style.copyright}>2022 © Made with love by me</p>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        firstButtonIndex={firstButtonIndex}
        lastButtonIndex={lastButtonIndex}
        currenPage={currenPage}
      />
      <PerPage setPerPage={setPerPage} setCurrentPage={setCurrentPage} />
    </footer>
  );
};
