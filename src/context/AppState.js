import React, { createContext, useReducer } from 'react';
import { DELETE_TRANSACTION, ADD_TRANSACTION } from './constants';
import initialState from './initialState';
import AppReducer from './reducer';

// create context
export const AppContext = createContext(initialState);

// Provider Component
// used to provide the global state to all components in the application
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  }

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
