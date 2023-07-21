import {ProfileSocial}  from './ProfileSocial/ProfileSocial';
import {Statistics} from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
   <>
   <ProfileSocial
    user={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data}/>
   </>
  );
};
