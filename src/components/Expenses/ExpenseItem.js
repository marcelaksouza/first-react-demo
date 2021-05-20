import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
     console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      {/*clickHandler() executes the code rigth away  */}
      <button onClick={clickHandler}>button</button>
    </Card>
  );
};

export default ExpenseItem;
