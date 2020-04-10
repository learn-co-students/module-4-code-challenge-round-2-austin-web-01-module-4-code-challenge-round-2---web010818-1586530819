import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      searchWord: "",
    };

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount() {
    const URL = "https://boiling-brook-94902.herokuapp.com/transactions";

    fetch(URL)
      .then((response) => response.json())
      .then((transactions) => {
        this.setState({ transactions });
      });
  }

  handleChange = (event) => {
    console.log("Event Target Value is", event.target.value);
    this.setState({
      searchWord: event.target.value,
    });
  };

  render() {
    // console.log(this.state.transactions);
    return (
      <div>
        <Search
          searchWord={this.state.searchWord}
          handleChange={this.handleChange}
        />
        <TransactionsList
          searchWord={this.state.searchWord}
          transactions={this.state.transactions.filter(
            (
              line // Should have used a Switch statement to capture all possibilities
            ) =>
              line.description.includes(
                this.state.searchWord.charAt(0).toUpperCase() +
                  this.state.searchWord.slice(1) || //capitalizes first letter of searchWord
                  this.state.searchWord  // accepts exactly what was entered
              ) ||
              line.category.includes(
                this.state.searchWord.charAt(0).toUpperCase() +
                  this.state.searchWord.slice(1) || //capitalizes first letter of searchWord
                  this.state.searchWord || // accepts exactly what was entered
                  this.state.searchWord.toLowerCase ||
                  this.state.searchWord.toUpperCase
              )
          )}
        />
      </div>
    );
  }
}

export default AccountContainer;
