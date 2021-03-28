export default (state, action) => {
  switch (action) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    default:
      return state;
  }
};
