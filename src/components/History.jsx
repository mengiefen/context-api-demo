import React from 'react';
import HistoryItem from './HistoryItem';

const History = () => {
  const list = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ];
  return (
    <div>
      <h5 className="bold w-100 border-bottom pb-1">History</h5>
      <ul className="list-group ">
        {list.map((item, index) => (
          <HistoryItem key={index} {...item} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default History;
