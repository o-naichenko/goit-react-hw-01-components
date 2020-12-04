import PropTypes from 'prop-types';
import "./FriendList.css";
import Friend from "../Friend/Friend";

const FriendsList = ({ friends }) =>
    <ul className="friend-list">
        {friends.map(friend => <Friend
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
        />
            // 
        )}
    </ul>;

FriendsList.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    friends: PropTypes.array
};

export default FriendsList;