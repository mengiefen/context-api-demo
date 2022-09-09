import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AppContext } from '../context/AppState';

const Balance = () => {
  const { transactions } = useContext(AppContext);

  const total = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <Card className="card">
      <Card.Header className="d-flex align-items-center justify-content-around ">
        <h5 className="title">YOUR BALANCE</h5>
        <h3 className="total-expense">${total}</h3>
      </Card.Header>
      <Card.Body className="d-flex flex-row align-items-center justify-content-around">
        <div className="border-right d-flex flex-column align-items-center ">
          <h6 className="card-title">INCOME</h6>
          <h4 className=" income">{income}</h4>
        </div>

        <div className="d-flex flex-column align-items-center">
          <h6 className="card-title ">EXPENSE</h6>
          <h4 className="expense">{expense}</h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Balance;
