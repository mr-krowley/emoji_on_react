import React from 'react'

export const Pagination = ({ pages  , setCurrentPage}) => {
  //массив для хранения номеров страниц
  const arrPages = [];

  for (let i = 1; i <= pages; i++){
    arrPages.push(i)
  }


  return (
    <div>
      {arrPages.map((elem, index) => (
        <button onClick={()=>setCurrentPage(elem)} key={index}>{ elem }</button>
      ))}
    </div>
  );
}
