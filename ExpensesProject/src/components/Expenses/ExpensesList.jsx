import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ filteredExpenses }) {
  return (
    <ul className="expenses-list">
      {filteredExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">
          There are no expenses found.
        </h2>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </ul>
  );
}

export default ExpensesList;
