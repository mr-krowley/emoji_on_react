import React from 'react'
import style from "./Footer.module.css"
import { PerPage } from '../PerPage/PerPage';
import { Pagination } from '../Pagination/Pagination';

export const Footer = ({setPerPage, pages, setCurrentPage}) => {
  return (
    <footer className={style.Footer}>
      <p className={style.copyright}>2022 © Made with love by me</p>
      <Pagination pages={pages} setCurrentPage={ setCurrentPage} />
      <PerPage setPerPage={setPerPage} setCurrentPage={setCurrentPage}/>
    </footer>
  );
}
