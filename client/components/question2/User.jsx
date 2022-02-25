export const User = ({ user }) => {
  return (
    <div>
      <div className={user.isAdmin ? 'text-green-700' : ''}>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};
