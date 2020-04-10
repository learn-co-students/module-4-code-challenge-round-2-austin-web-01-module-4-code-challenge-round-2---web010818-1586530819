import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.lineItem.posted_at}</td>
      <td>{props.lineItem.description}</td>
      <td>{props.lineItem.category}</td>
      <td>{props.lineItem.amount}</td>
    </tr>
  )
}

export default Transaction
