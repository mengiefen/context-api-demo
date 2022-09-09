import React, { useContext } from 'react';
import HistoryItem from './HistoryItem';
import { AppContext } from '../context/AppState';

const History = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div>
      <h5 className="bold w-100 border-bottom pb-1">History</h5>
      <ul className="list-group ">
        {transactions.map((item, index) => (
          <HistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default History;
