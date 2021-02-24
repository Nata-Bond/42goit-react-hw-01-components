import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "./friendsStyled";

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem className="item" isOnline={isOnline}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};

FriendsItem.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg",
};
FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;
