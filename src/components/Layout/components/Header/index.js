import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
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
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Menu } from '~/components/Popper';

import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { NoficationsIcon, SearchIcon } from '~/components/Icons';
import Image from '~/components/Images';

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
   const [searchResult, setSearhResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearhResult([]);
      }, 0);
   }, []);

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
            <HeadlessTippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Search account and videos" spellCheck={false} />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                  <button className={cx('search-btn')}>
                     <SearchIcon />
                  </button>
               </div>
            </HeadlessTippy>
            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 100]} content="Upload" placement="bottom">
                        <button className={cx('action-btn')}>
                           <MdOutlineCloudUpload />
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 100]} content="Message" placement="bottom">
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
