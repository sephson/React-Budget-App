import React from "react";
import "../App.css";

function InExp() {
  return (
    <div className="income_exp">
      <div className="income">
        <p className="net-income">Net Income</p>
        <h2 className="net-income-amt">₦0</h2>
      </div>
      <div className="expense-side">
        <p className="exp">Expenditure</p>
        <h2 className="exp-amt">₦0</h2>
      </div>
    </div>
  );
}

export default InExp;
