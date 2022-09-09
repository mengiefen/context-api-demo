import React from 'react';
import { CloseButton } from 'react-bootstrap';

const HistoryItem = (props) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between mb-2
      ${props.amount < 0 ? 'border-expense' : 'border-income'}`}
      id={props.index}
    >
      {props.text} <span>{props.amount}</span>
      <CloseButton className="close-button" />
    </li>
  );
};

export default HistoryItem;
