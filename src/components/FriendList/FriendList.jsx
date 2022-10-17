import PropTypes from 'prop-types';
import Friend from './friendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={Friend.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline}
                />
            ))}
        </ul>
    );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={Friend.item}>
            <span className={isOnline ? Friend.active : Friend.status}></span>
                <img className={Friend.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={Friend.name}>{name}</p>
        </li>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        })
    ),
};

// DONE