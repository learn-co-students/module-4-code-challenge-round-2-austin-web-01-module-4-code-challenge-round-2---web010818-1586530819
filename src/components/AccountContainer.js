import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const API = ('https://boiling-brook-94902.herokuapp.com/transactions')

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: "",
      results: []
    }
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data}))
  }

  handleChange = (event) => {
    let search = event.target.value
    this.setState({
      searchTerm: search
    })
    this.filterResults(search)
  }

  filterResults = (search) => {
    let filtered = this.state.transactions.slice(0)
    filtered = filtered.filter(i => i.description.toLowerCase().includes(search) || i.category.toLowerCase().includes(search))
    this.setState({
      results: filtered
    })
  }


  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        { this.state.searchTerm.length > 0 ? <TransactionsList t={this.state.results} /> : <TransactionsList t={this.state.transactions}/> }
      </div>
    )
  }
}

export default AccountContainer
