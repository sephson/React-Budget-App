import React, { useContext } from "react";
import "../App.css";
import GlobalContext from "../context/GlobalState";
import IncomeTransactions from "./IncomeTransactions";

function Incomelist() {
  const { incomeTransactions } = useContext(GlobalContext);
  console.log(incomeTransactions);
  return (
    <div className="income-list">
      <h3>Transaction History</h3>
      <ul>
        {incomeTransactions.map((incomeTransaction) => {
          return (
            <IncomeTransactions
              key={incomeTransaction.id}
              incomeTransaction={incomeTransaction}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Incomelist;
