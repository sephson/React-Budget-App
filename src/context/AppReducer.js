const AppReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_INCOME":
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };

    case "SUBMIT_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };

    case "DELETE_INCOME":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransaction) => {
            return incomeTransaction.id !== action.payload;
          }
        ),
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenseTransactions: state.expenseTransactions.filter(
          (expenseTransaction) => {
            return expenseTransaction.id !== action.payload;
          }
        ),
      };

    default:
  }
};

export default AppReducer;
