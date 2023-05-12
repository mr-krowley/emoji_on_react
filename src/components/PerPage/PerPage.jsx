import React from 'react'
import s from './PerPage.module.css'

export const PerPage = ({ setPerPage ,setCurrentPage}) => {
  return (
    <select onChange={(evt) => {
      setPerPage(evt.target.value)
      setCurrentPage(1)
  }}>
      <option value={12}>12</option>
      <option value={24}>24</option>
      <option value={48}>48</option>
    </select>
  );
}
