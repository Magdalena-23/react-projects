import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    props.setShouldShow(false);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={enteredTitle}
              onChange={(e) => setEnteredTitle(e.target.value)}
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={enteredAmount}
              onChange={(e) => {
                setEnteredAmount(e.target.value);
              }}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={enteredDate}
              onChange={(e) => {
                setEnteredDate(e.target.value);
              }}
              type="date"
              min="01-01-2019"
              max="31-12-2023"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={() => props.setShouldShow(false)}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
