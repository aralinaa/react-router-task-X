import React from 'react'
import { useParams } from 'react-router-dom'

const Example = () => {
  const array = ['Drink tea', 'shooting', 'run', 'home', 'mir']
  const { userId } = useParams()
  const st = 'container'
  return (
    <div>
      <h1 className={st}>{userId}</h1>
      <ul>
        {array.map((el) => {
          return <li>{el}</li>
        })}
      </ul>
    </div>
  )
}

export default Example
