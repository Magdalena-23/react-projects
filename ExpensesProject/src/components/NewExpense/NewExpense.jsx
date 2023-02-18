import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [shouldShow, setShouldShow] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      {shouldShow ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          setShouldShow={setShouldShow}
        />
      ) : (
        <button onClick={() => setShouldShow(true)}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
