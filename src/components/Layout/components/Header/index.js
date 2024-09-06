import classNames from 'classnames/bind';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faEllipsisVertical,
   faLanguage,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faGear,
   faCoins,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';

import { Menu } from '~/components/Popper';

import Button from '~/components/Button';
import { NoficationsIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);
const MENU_ITEM = [
   {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               code: 'en',
               title: 'English',
            },
            {
               code: 'vi',
               title: 'Vietnamese',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and Help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard Shortcuts',
   },
];

const currentUser = true;

function Header() {
   const handleMenuChange = (menuItem) => {
      console.log(menuItem);
   };

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View Profile',
         to: '/profile',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get Coin',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Setting',
         to: '/setting',
      },
      ...MENU_ITEM,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/logout',
         separate: true,
      },
   ];

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="tiktok" />
            <Search />
            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 100]} content="Upload" placement="bottom">
                        <button className={cx('action-btn')}>
                           <MdOutlineCloudUpload />
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')}>
                           <NoficationsIcon />
                           <span className={cx('badge')}>12</span>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Login</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image
                        className={cx('user-avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/af012a75f6e298af0a92c430be935485.jpeg?lk3s=30310797&nonce=54836&refresh_token=ea6bd22fcaaaa5a166d2300c4fc28c18&x-expires=1725458400&x-signature=dQX9j%2BojPQ9TG85C%2BhL2X1fJOBU%3D&shp=30310797&shcp=-"
                        alt="avatar"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
