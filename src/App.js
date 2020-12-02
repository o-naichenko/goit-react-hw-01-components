import Profile from './components/Profile';
import user from './props/user.json';
import Statistics from './components/Statistics';
import statisticalData from './props/statistical-data.json';
import FriendsList from './components/FriendList';
import friends from './props/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './props/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
