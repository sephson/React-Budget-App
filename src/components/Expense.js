import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import ExpenseTransaction from "./ExpenseTransaction";

function Expense() {
  const { expenseTransactions } = useContext(GlobalContext);
  console.log(expenseTransactions);

  return (
    <div className="expense-list">
      <h3>Transaction History</h3>
      <div>
        {expenseTransactions.map((expenseTransaction) => {
          return <ExpenseTransaction expenseTransaction={expenseTransaction} />;
        })}
      </div>
    </div>
  );
}

export default Expense;
