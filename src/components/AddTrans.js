import React, { useState, useContext } from "react";
import "../App.css";
import GlobalContext from "../context/GlobalContext";
import uuid from "react-uuid";

function AddTrans() {
  const { submitIncome } = useContext(GlobalContext);
  const { submitExpenses } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const handleIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const handleExpenses = (e) => {
    // console.log(e.target.value);
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    // console.log(income);

    const newIncomeTransaction = {
      id: uuid(),
      incomeText: income.incomeText,
      incomeAmount: Number(income.incomeAmount),
    };

    submitIncome(newIncomeTransaction);

    console.log(newIncomeTransaction);
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    const newExpenseTransaction = {
      id: uuid(),
      expenseText: expense.expenseText,
      expenseAmount: Number(expense.expenseAmount),
    };
    submitExpenses(newExpenseTransaction);
    console.log(newExpenseTransaction);
  };

  return (
    <div className="addtrans">
      <form onSubmit={handleIncomeSubmit} className="add-trans">
        <h2 className="income-head  ">INCOME</h2>

        <input
          value={income.incomeText}
          name="incomeText"
          className="income-text"
          type="text"
          placeholder="Income"
          onChange={handleIncome}
        />

        <input
          value={income.incomeAmount}
          name="incomeAmount"
          className="income-amt "
          type="number"
          placeholder="Amount"
          onChange={handleIncome}
        />

        <button className="income-btn ">Submit</button>
      </form>

      <form onSubmit={handleExpenseSubmit} className="add-trans">
        <h2 className="expense-head  ">EXPENSE</h2>

        <input
          name="expenseText"
          value={expense.expenseText}
          className="expense-text"
          type="text"
          placeholder="Expenditure"
          onChange={handleExpenses}
        />

        <input
          onChange={handleExpenses}
          value={expense.expenseAmount}
          name="expenseAmount"
          className="expense-amt "
          type="number"
          placeholder="Amount"
        />

        <button className="expense-btn ">Submit</button>
      </form>
    </div>
  );
}

export default AddTrans;
