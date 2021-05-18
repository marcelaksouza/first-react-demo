import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th</div>
      <div className="expense-item_description">
        <h2>Expense Item</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
