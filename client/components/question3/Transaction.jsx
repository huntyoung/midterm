export const Transaction = ({ transaction }) => {
  return (
    <div>
      <div>Amount: {transaction.amount}</div>
      <div>From: {transaction.fromUser.name}</div>
      <div>To: {transaction.toUser.name}</div>
    </div>
  );
};
