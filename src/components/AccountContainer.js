import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import { transactions } from '../transactionsData'

const API_URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      ledger: [],
      newLedger: []
    };

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  };

  componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(ledger => this.setState({ ledger }))

  };

  handleChange = (letter) => {
    let newLedger = this.state.ledger.filter(item => (item.description.match(letter) || (item.category.match(letter))))
    this.setState({ newLedger })

    // how do I get it to seach case insensitive?

  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList ledger={!this.state.newLedger.length ? this.state.ledger : this.state.newLedger} />
      </div>
    )
  }
}

export default AccountContainer
