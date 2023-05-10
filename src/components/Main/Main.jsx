import React from 'react'
import { Card } from '../Card/Card'

export const Main = ({value,data}) => {
  return (
    <main>
      {data.map(elem => <Card/>)}
    </main>
  )
}
