import PropTypes from 'prop-types'

const FriendsList = ({friends }) =>
    <ul className="friend-list">
        {friends.map(friend =>
        <li key={ friend.id} className="item">
        <span className={ friend.isOnline ? "status is-online" : "status"}></span>
        <img className="avatar" src={ friend.avatar} alt="" width="48" />
        <p className="name">{ friend.name}</p></li>
        )}
    </ul>

FriendsList.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    friends: PropTypes.array
}

export default FriendsList;