import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.t.posted_at}</td>
      <td>{props.t.description}</td>
      <td>{props.t.category}</td>
      <td>{props.t.amount}</td>
    </tr>
  )
}

export default Transaction
