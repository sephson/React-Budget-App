import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function ExpenseTransaction({ expenseTransaction }) {
  const { deleteExpense } = useContext(GlobalContext);

  const handleExpenseDelete = (e) => {
    e.preventDefault();
    deleteExpense(expenseTransaction.id);
  };
  return (
    <div>
      <li className="expexp" key={expenseTransaction.id}>
        {expenseTransaction.expenseText}
        <span> - ₦{expenseTransaction.expenseAmount}</span>
        <button onClick={handleExpenseDelete} className="del-btn">
          X
        </button>
      </li>
    </div>
  );
}

export default ExpenseTransaction;
