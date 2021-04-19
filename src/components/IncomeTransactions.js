import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function IncomeTransactions({ incomeTransaction }) {
  const { deleteIncome } = useContext(GlobalContext);

  const handleDeleteIncome = (e) => {
    e.preventDefault();
    deleteIncome(incomeTransaction.id);
  };
  return (
    <li className="ins" key={incomeTransaction.id}>
      {incomeTransaction.incomeText} -
      <span> ₦{incomeTransaction.incomeAmount}</span>
      <button onClick={handleDeleteIncome} className="del-btn">
        X
      </button>
    </li>
  );
}

export default IncomeTransactions;
