import React, { useContext } from "react";
import GlobalState from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

function Expense() {
  const { expenseTransactions } = useContext(GlobalState);

  //   console.log(expenseTransactions);

  return (
    <div className="expense-list">
      <h3>Transaction History</h3>
      <div>
        {expenseTransactions.map((expenseTransaction) => {
          return (
            <ExpenseTransaction
              key={expenseTransaction.id}
              expenseTransaction={expenseTransaction}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Expense;
