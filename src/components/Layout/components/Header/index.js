import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faEllipsisVertical,
   faLanguage,
   faCircleQuestion,
   faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Menu } from '~/components/Popper';

import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

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

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="tiktok" />
            <Tippy
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
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={cx('action')}>
               <Button text>Upload</Button>
               <Button primary>Login</Button>
               <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                  <button className={cx('more-btn')}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
