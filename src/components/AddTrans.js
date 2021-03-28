import React, { useState, useContext } from "react";
import "../App.css";
import GlobalContext from "../context/GlobalState";

function AddTrans() {
  const { addIncome } = useContext(GlobalContext);

  const [income, setIncome] = useState({ incomeText: "", incomeAmt: 0 });

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const incomeSubmitHandler = (e) => {
    e.preventDefault();

    const newIncomeTransaction = {
      id: Math.floor(Math.random() * 1000),
      incomeText: income.incomeText,
      incomeAmt: Number(income.incomeAmt),
    };

    console.log(newIncomeTransaction);
    addIncome(newIncomeTransaction);
  };
  return (
    <div className="addtrans">
      <form onSubmit={incomeSubmitHandler} className="add-trans">
        <h2 className="income-head  ">INCOME</h2>

        <input
          onChange={onChangeIncome}
          name="incomeText"
          className="income-text"
          type="text"
          placeholder="Income"
        />

        <input
          onChange={onChangeIncome}
          name="incomeAmt"
          className="income-amt "
          type="number"
          placeholder="Amount"
        />

        <button className="income-btn ">Submit</button>
      </form>

      <form className="add-trans">
        <h2 className="expense-head  ">EXPENSE</h2>

        <input className="expense-text" type="text" placeholder="Expenditure" />

        <input className="expense-amt " type="number" placeholder="Amount" />

        <button className="expense-btn ">Submit</button>
      </form>
    </div>
  );
}

export default AddTrans;
