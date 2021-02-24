import React from "react";
import PropTypes from "prop-types";
import { Profilediv } from "./profileStyled";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Profilediv>
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </Profilediv>
  );
};

Profile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
  location: "planet Earth",
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
