import React from 'react'
import s from './Pagination.module.css'
export const Pagination = ({
  pages,
  setCurrentPage,
  lastButtonIndex,
  firstButtonIndex,
  currenPage
}) => {
  //массив для хранения номеров страниц
  const arrPages = [];

  for (let i = 1; i <= pages; i++) {
    arrPages.push(i);
  }

  return (
    <div>
      <button onClick={() => setCurrentPage(currenPage - 1)}>&lt;&lt;</button>
      {arrPages.slice(firstButtonIndex, lastButtonIndex).map((elem, index) => (
        <button
          className={currenPage == elem ? s.active : null}
          onClick={() => setCurrentPage(elem)}
          key={index}
        >
          {elem}
        </button>
      ))}
      <button onClick={() => setCurrentPage(currenPage + 1)}>&gt;&gt;</button>
    </div>
  );
};
