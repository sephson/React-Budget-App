import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const InitialState = {
  incomeTransactions: [
    {
      id: 1,
      incomeText: "Salary",
      incomeAmt: 2000,
    },

    {
      id: 2,
      incomeText: "Gifts",
      incomeAmt: 5000,
    },
    {
      id: 3,
      incomeText: "Wages",
      incomeAmt: 700,
    },
  ],

  expenseTransactions: [
    {
      id: 1,
      expenseText: "Shopping",
      expenseAmt: 1500,
    },
    {
      id: 2,
      expenseText: "Eating out",
      expenseAmt: 900,
    },
    {
      id: 3,
      expenseText: "Rent",
      expenseAmt: 2500,
    },
  ],
};

const GlobalContext = createContext(InitialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
