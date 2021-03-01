import React from "react";
import Profile from "./profile/Profile";
import user from "../data/user.json";
import Statistics from "./statistics/Statistics";
import statsData from "../data/statistical-data.json";
import friendsData from "../data/friends.json";
import Friends from "./friends/Friends";
import transData from "../data/transactions.json";
import TransactionHistory from "./transactions/TransactionHistory";

const App = () => {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {statsData.length > 0 && (
        <Statistics title="Upload stats" stats={statsData} />
      )}
      <Friends friends={friendsData} />
      <TransactionHistory transactions={transData} />
    </div>
  );
};

export default App;
