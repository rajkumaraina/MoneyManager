import './index.css'

const MoneyDetailImg = props => {
  const {item} = props
  const {bal, inc, exp} = item
  return (
    <div className="moneyDetailsContainer">
      <li className="moneyDetailsList">
        <div className="listItems1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="MoneyDetailsItemImg"
          />
          <div className="rupeesContainer">
            <p className="MoneyDetailPara">Your Balance</p>
            <p className="moneyDetailMoney" data-testid="balanceAmount">
              Rs {bal}
            </p>
          </div>
        </div>
      </li>
      <li className="moneyDetailsList">
        <div className="listItems2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="MoneyDetailsItemImg"
          />
          <div className="rupeesContainer">
            <p className="MoneyDetailPara">Your Income</p>
            <p className="moneyDetailMoney" data-testid="incomeAmount">
              Rs {inc}
            </p>
          </div>
        </div>
      </li>
      <li className="moneyDetailsList">
        <div className="listItems3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="MoneyDetailsItemImg"
          />
          <div className="rupeesContainer">
            <p className="MoneyDetailPara">Your Expenses</p>
            <p className="moneyDetailMoney" data-testid="expensesAmount">
              Rs {exp}
            </p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default MoneyDetailImg
