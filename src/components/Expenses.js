import ExpenseItem from './ExpenseItem'
import "./Expenses.css";

function Expenses(props) {
  
  return (
    <div className='expenses'>
      <h2>Expense App</h2>
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
    </div>
  );
}

export default Expenses;
