import PropTypes from 'prop-types';
import "./Profile.css";
import defaultImage from "../../images/default-user-image.png";
import Stats from "./Stats";


const Profile = ({
  name,
  tag,
  location,
  avatar = defaultImage,
  stats }) =>
  <div className="profile">
    <div className="description">
      <img
        src={avatar ?? defaultImage}
        alt="user avatar"
        className="avatar"
        width="480"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <Stats
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}
    />
  </div>;
 

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;