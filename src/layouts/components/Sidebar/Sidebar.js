import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Menu, MenuItem } from './Menu';
import config from '~/config';
import {
   MessesgeIcon,
   HomeIcon,
   ExploreIcon,
   FriendIcon,
   LiveIcon,
   FollowingIcon,
   HomeActiveIcon,
   ExploreActiveIcon,
   FollowingActiveIcon,
   FriendActiveIcon,
   LiveActiveIcon,
   MessagesActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem
               title="Explore"
               to={config.routes.explore}
               icon={<ExploreIcon />}
               activeIcon={<ExploreActiveIcon />}
            />
            <MenuItem
               title="Following"
               to={config.routes.following}
               icon={<FollowingIcon />}
               activeIcon={<FollowingActiveIcon />}
            />
            <MenuItem
               title="Friends"
               to={config.routes.friend}
               icon={<FriendIcon />}
               activeIcon={<FriendActiveIcon />}
            />
            <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            <MenuItem
               title="Messages"
               to={config.routes.message}
               icon={<MessesgeIcon />}
               activeIcon={<MessagesActiveIcon />}
            />
         </Menu>
         <SuggestedAccounts label="Suggested Accounts" />
         <SuggestedAccounts label="Following Accounts" />
      </aside>
   );
}

export default Sidebar;
