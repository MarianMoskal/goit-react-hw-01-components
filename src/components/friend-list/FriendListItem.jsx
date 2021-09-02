import PropTypes from "prop-types";
import s from "./friendList.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  const onLine = s.statusOnLine;
  const ofLine = s.statusOfLine;

  return (
    <li className={s.item}>
      <span className={isOnline === true ? onLine : ofLine}></span>
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
