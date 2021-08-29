import PropTypes from "prop-types";
import s from "./friendList.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline === true ? (
        <span className={s.statusOnLine}></span>
      ) : (
        <span className={s.statusOfLine}></span>
      )}

      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
