import React from "react";
import FriendsItem from "./FriendsItem";
import PropTypes from "prop-types";
import { List } from "./friendsStyled";

const Friends = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map((friend) => (
        <FriendsItem key={friend.id} {...friend} />
      ))}
    </List>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// Friends.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };

export default Friends;
