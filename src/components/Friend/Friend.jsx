import PropTypes from "prop-types";
import "./Friend.css";

const Friend = ({
    isOnline,
    avatar,
    name
    }) =>
    <li  className="item">
        <span className={isOnline ? "status is-online" : "status"}></span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
    </li>;


Friend.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Friend;