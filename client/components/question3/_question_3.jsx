import { useContext, useEffect, useState } from 'react';
import { Transaction } from './Transaction';
import { ApiContext } from '../../utils/api_context';

export const Question3 = () => {
  const api = useContext(ApiContext);

  const [transactions, setTransations] = useState([]);

  useEffect(async () => {
    const { transactions } = await api.get('/transactions');
    setTransations(transactions);
  }, []);

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="inline-block p-3">
          <Transaction transaction={transaction} />
        </div>
      ))}
    </div>
  );
};
