import css from './FriendListItem.module.css';
import friends from '../../data/friends.json';

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
        <span className={`css.status ${isOnline ? `${css.green}` : `${css.red}`}`}>{isOnline ? 'Online' : 'Oflline'}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>

      ))}

    </>

  )
}

