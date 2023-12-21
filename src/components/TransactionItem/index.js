import './index.css'

const EachTransactionItem = props => {
  const {item, TransactionDelete} = props
  const {id, title, amount, AmountType} = item
  console.log(AmountType)
  const removeTransaction = () => {
    TransactionDelete(id)
  }
  return (
    <div className="borderForHistory1">
      <p className="historyDetailsTitleItem">{title}</p>
      <p className="historyDetailsAmountItem">Rs {amount}</p>
      <p className="historyDetailsTypeItem">{AmountType}</p>
      <button
        data-testid="delete"
        className="Deletebutton"
        onClick={removeTransaction}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="deleteImg"
          alt="delete"
        />
      </button>
    </div>
  )
}
export default EachTransactionItem
