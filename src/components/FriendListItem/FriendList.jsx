import css from './FriendListItem.module.css';
import friends from '../../data/friends.json';
import PropTypes from 'prop-types';

export const FriendList = () => {
  return (

   <ul className={css.friendList}>
       <FriendListItem friends={friends}/>
   </ul>
   
  )
 }


const FriendListItem = ({friends}) => {
  return (

    <>

    {friends.map(({avatar, name, isOnline, id}) => (

      <li className={css.item} key={id}>
        <span className={`css.status ${isOnline ? `${css.green}` : `${css.red}`}`}>{isOnline ? 'Online' : 'Offline'}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>

      ))}

    </>

  )
}


FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      inOnline: PropTypes.bool.isRequired
    })
  )
}

