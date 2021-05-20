import React, {useState} from "react"
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState('2020');

  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          selected={filterYear}
          onChangeFilter={filterChangehandler}
        />
        {props.item.map((expense)=>(
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
