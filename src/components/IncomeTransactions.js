import React from "react";

function IncomeTransactions({ incomeTransaction }) {
  return (
    <li>
      {incomeTransaction.incomeText} <span>₦{incomeTransaction.incomeAmt}</span>
      <button className="del-btn">X</button>
    </li>
  );
}

export default IncomeTransactions;
