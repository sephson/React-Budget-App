import React, { useContext } from "react";
import "../App.css";
import GlobalContext from "../context/GlobalContext";

function Balance() {
  const { netIncome, expenditure } = useContext(GlobalContext);
  return (
    <div className="balance_field">
      <h1 className="balance">₦{netIncome - expenditure}</h1>
      <p className="app__header">Balance</p>
    </div>
  );
}

export default Balance;
