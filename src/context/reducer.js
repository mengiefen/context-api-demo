import { ADD_TRANSACTION, DELETE_TRANSACTION } from './constants';

// Reducer
const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case DELETE_TRANSACTION:
      console.log('R');
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
