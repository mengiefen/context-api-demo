import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppState';

const TransactionForm = () => {
  const { addTransaction } = useContext(AppContext);
  const [transaction, setTransaction] = useState({
    type: '',
    amount: 0,
  });

  const handleSubmit = (e) => {
    console.log(typeof transaction.type);
    e.preventDefault();
    addTransaction({
      ...transaction,
      amount: +transaction.amount,
      id: Date.now(),
    });
    setTransaction({
      id: '',
      type: '',
      amount: 0,
    });
  };

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  return (
    <Form className="my-1" onSubmit={handleSubmit}>
      <h5 className="bold border-bottom pb-1"> Add new transaction</h5>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter text"
          name="type"
          value={transaction.type}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter amount"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="my-2 w-100 py-1">
        Add transaction
      </Button>
    </Form>
  );
};

export default TransactionForm;
