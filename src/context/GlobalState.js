import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import AppReducer from "./AppReducer";

function GlobalState({ children }) {
  const initialState = {
    incomeTransactions: [],
    expenseTransactions: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const submitIncome = (incomeTransactions) => {
    dispatch({ type: "SUBMIT_INCOME", payload: incomeTransactions });
  };

  const submitExpenses = (expenseTransactions) => {
    dispatch({ type: "SUBMIT_EXPENSE", payload: expenseTransactions });
  };

  const deleteIncome = (id) => {
    dispatch({ type: "DELETE_INCOME", payload: id });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  const listOfIncomeAmount = state.incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  // console.log(listOfIncomeAmount);

  const listOfExpenseAmount = state.expenseTransactions.map(
    (expenseTransaction) => {
      return expenseTransaction.expenseAmount;
    }
  );

  //   const array1 = [1, 2, 3, 4]
  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // console.log(array1.reduce(reducer));

  const totalIncome = (acc, currentVal) => acc + currentVal;
  // console.log(listOfIncomeAmount.reduce(totalIncome, 0));
  const netIncome = listOfIncomeAmount.reduce(totalIncome, 0);

  const totalExpense = (acc, currentVal) => acc + currentVal;
  const expenditure = listOfExpenseAmount.reduce(totalExpense, 0);

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        submitIncome,
        submitExpenses,
        deleteIncome,
        deleteExpense,
        netIncome,
        expenditure,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
