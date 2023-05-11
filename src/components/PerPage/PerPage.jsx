import React from 'react'

export const PerPage = (setPerPage) => {
  return (
    <select onChange={(evt) => setPerPage(evt.target.value)}>
      <option value={12}>12</option>
      <option value={24}>24</option>
      <option value={48}>48</option>
    </select>
  );
}
