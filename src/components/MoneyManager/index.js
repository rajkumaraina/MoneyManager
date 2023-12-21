import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetailImg from '../MoneyDetails'

import EachTransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const TypeOptions = props => {
  const {item} = props
  const {optionId, displayText} = item
  return <option value={optionId}>{displayText}</option>
}

class MoneyManager extends Component {
  state = {
    TransactionList: [],
    Balance: 0,
    Income: 0,
    Expenses: 0,
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  TransactionDelete = id => {
    const {TransactionList, Balance, Income, Expenses} = this.state
    const bal = TransactionList.find(each => each.id === id)
    const {amount, AmountType} = bal
    const deletedAmount = parseInt(amount)
    let presentBalance = Balance
    let presentIncome = Income
    let presentExpenses = Expenses
    if (AmountType === 'Income') {
      presentBalance = Balance - deletedAmount
      presentIncome = Income - deletedAmount
    } else {
      presentBalance = Balance + deletedAmount
      presentExpenses = Expenses - deletedAmount
    }
    const filteredList = TransactionList.filter(each => each.id !== id)
    this.setState({
      TransactionList: filteredList,
      Balance: presentBalance,
      Income: presentIncome,
      Expenses: presentExpenses,
    })
  }

  formSubmited = event => {
    event.preventDefault()
    const {Balance, Income, Expenses, title, amount, type} = this.state
    let inn = Income
    let o = Expenses
    let AmountType
    let money
    if (type === 'INCOME') {
      money = Balance + parseInt(amount)
      inn = Income + parseInt(amount)
      AmountType = 'Income'
    } else {
      money = Balance - parseInt(amount)
      o = Expenses + parseInt(amount)
      AmountType = 'Expenses'
    }
    const newTransaction = {id: uuidv4(), title, amount, AmountType}
    this.setState(prevState => ({
      TransactionList: [...prevState.TransactionList, newTransaction],
      title: '',
      amount: '',
      Income: inn,
      Expenses: o,
      Balance: money,
    }))
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
  }

  typeChange = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {
      TransactionList,
      Balance,
      Income,
      Expenses,
      title,
      amount,
      type,
    } = this.state
    const MoneyDetailsRupees = {bal: Balance, inc: Income, exp: Expenses}
    return (
      <div className="mainContainer">
        <div className="secondContainer">
          <div className="nameContainer">
            <h1 className="nameHeading">Hi, Rajkumar </h1>
            <p className="welcomePara">
              Welcome back to your
              <span className="spanElement"> Money manager</span>
            </p>
          </div>
          <ul className="unorderedMoneyDetails">
            <MoneyDetailImg item={MoneyDetailsRupees} />
          </ul>
          <div className="bottomContainer">
            <div className="inputContainer">
              <h1 className="addTransaction">Add Transaction</h1>
              <form onSubmit={this.formSubmited} className="formelement">
                <label htmlFor="title" className="labels">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  onChange={this.titleChange}
                  className="inputElements"
                  placeholder="TITLE"
                  value={title}
                />
                <label htmlFor="amount" className="labels">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  type=""
                  onChange={this.amountChange}
                  className="inputElements"
                  placeholder="AMOUNT"
                  value={amount}
                />
                <label htmlFor="type" className="labels">
                  TYPE
                </label>
                <select
                  id="type"
                  className="options"
                  onChange={this.typeChange}
                  value={type}
                >
                  {transactionTypeOptions.map(each => (
                    <TypeOptions item={each} key={each.optionId} />
                  ))}
                </select>
                <button className="AddButton" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="transactionContainer">
              <h1 className="history">History</h1>
              <div className="borderForHistory">
                <p className="historyDetailsTitle">Title</p>
                <p className="historyDetailsAmount">Amount</p>
                <p className="historyDetailsType">Type</p>
              </div>
              {TransactionList.map(each => (
                <EachTransactionItem
                  item={each}
                  key={each.id}
                  TransactionDelete={this.TransactionDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
