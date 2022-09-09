import React, { useContext } from 'react';
import { CloseButton } from 'react-bootstrap';
import { AppContext } from '../context/AppState';

const HistoryItem = (props) => {
  const { deleteTransaction } = useContext(AppContext);

  const sign = props.amount < 0 ? '-' : '';

  return (
    <li
      className={`list-group-item d-flex justify-content-between mb-2 px-4
      ${props.amount < 0 ? 'border-expense' : 'border-income'}`}
    >
      {props.type}
      <span>
        {sign}${Math.abs(props.amount)}
      </span>
      <CloseButton
        className="close-button"
        type="button"
        onClick={() => {
          deleteTransaction(props.id);
          console.log('C');
        }}
      />
    </li>
  );
};

export default HistoryItem;
