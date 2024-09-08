import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = true }) {
   const [history, setHistory] = useState([{ data: items }]);

   const current = history[history.length - 1];

   const renderItem = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };

   return (
      <Tippy
         hideOnClick={hideOnClick}
         offset={[12, 8]}
         delay={[0, 500]}
         interactive
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>
                  {history.length > 1 && (
                     <Header title="Language" onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))} />
                  )}
                  <div className={cx('menu-body')}>{renderItem()}</div>
               </PopperWrapper>
            </div>
         )}
         onHide={() => setHistory((prev) => prev.slice(0, 1))}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
