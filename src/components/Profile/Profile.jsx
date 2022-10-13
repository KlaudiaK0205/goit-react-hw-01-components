import PropTypes from 'prop-types';
import ProfilesStyles from './profile.styles.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
    <div className={ProfilesStyles.profile}>
        <div className={ProfilesStyles.description}>
        <img src={avatar} alt="User avatar" className={ProfilesStyles.avatar} />
        <p className={ProfilesStyles.name}>{username}</p>
        <p className={ProfilesStyles.tag}>@{tag}</p>
        <p className={ProfilesStyles.location}>{location}</p>
        </div>
        <ul className={ProfilesStyles.stats}>
        {[
            [1, 'Followers', stats.followers],
            [2, 'Views', stats.views],
            [3, 'Likes', stats.likes],
        ].map(([id, text, value]) => (
            <li key={id} className ={ProfilesStyles.item}>
            <span className={ProfilesStyles.label}>{text}</span>
            <span className={ProfilesStyles.quantity}>{value}</span>
            </li>
        ))}
        </ul>
    </div>
);

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

// DONE