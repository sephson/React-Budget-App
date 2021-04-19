import React, { useContext } from "react";
import "../App.css";
import GlobalContext from "../context/GlobalContext";

function InExp() {
  const {
    // incomeTransactions,
    // expenseTransactions,
    netIncome,
    expenditure,
  } = useContext(GlobalContext);

  return (
    <div className="income_exp">
      <div className="income">
        <p className="net-income">Net Income</p>
        <h2 className="net-income-amt">₦{netIncome}</h2>
      </div>
      <div className="expense-side">
        <p className="exp">Expenditure</p>
        <h2 className="exp-amt">₦{expenditure}</h2>
      </div>
    </div>
  );
}

export default InExp;
