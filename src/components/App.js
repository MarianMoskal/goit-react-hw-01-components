import Profile from "./social-profile/Profile.jsx";
import user from "./social-profile/user.json";
import Statistics from "./statistics/Statistics.jsx";
import statisticalData from "./statistics/statistical-data.json";
import FriendList from "./friend-list/FriendList.jsx";
import friends from "./friend-list/friends.json";
import TransactionHistory from "./transaction-history/TransactionHistory.jsx";
import items from "./transaction-history/transactions.json";

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
}

export default App;
