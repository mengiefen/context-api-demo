import React from 'react';
import { Card } from 'react-bootstrap';

const Balance = () => {
  return (
    <Card className="card">
      <Card.Header className="d-flex align-items-center justify-content-around ">
        <h5 className="title">YOUR BALANCE</h5>
        <h3 className="total-expense">$250</h3>
      </Card.Header>
      <Card.Body className="d-flex flex-row align-items-center justify-content-around">
        <div className="border-right d-flex flex-column align-items-center ">
          <h6 className="card-title">INCOME</h6>
          <h4 className=" income">$500.00</h4>
        </div>

        <div className="d-flex flex-column align-items-center">
          <h6 className="card-title ">EXPENSE</h6>
          <h4 className="expense">$250.00</h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Balance;
