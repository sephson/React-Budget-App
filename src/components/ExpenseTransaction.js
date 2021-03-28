import React from "react";

function ExpenseTransaction({ expenseTransaction }) {
  return (
    <div>
      <li>
        {expenseTransaction.expenseText}
        <span>₦{expenseTransaction.expenseAmt}</span>
        <button className="del-btn">X</button>
      </li>
    </div>
  );
}

export default ExpenseTransaction;
