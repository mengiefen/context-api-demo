import Balance from './components/Balance';
import History from './components/History';
import TransactionForm from './components/TransactionForm';

function App() {
  return (
    <div className="container mt-2">
      <div className="mx-auto border content-area">
        <h3 className="mx-auto header bg-primary ">Expense Tracker</h3>
        <Balance />
        <History />
        <TransactionForm />
      </div>
    </div>
  );
}

export default App;
