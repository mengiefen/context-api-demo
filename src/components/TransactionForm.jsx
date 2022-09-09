import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TransactionForm = () => {
  return (
    <Form className="my-1">
      <h5 className="bold border-bottom pb-1"> Add new transaction</h5>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text" placeholder="Enter text" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="Enter amount" />
      </Form.Group>
      <Button variant="primary" type="submit" className="my-2 w-100 py-1">
        Add transaction
      </Button>
    </Form>
  );
};

export default TransactionForm;
