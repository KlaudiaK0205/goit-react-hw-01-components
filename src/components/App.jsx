import user from '../data/user';
import statistics from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

import { Profile } from './Profile/Profile';
import { UserStats } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <UserStats title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        
    </>
  );
};