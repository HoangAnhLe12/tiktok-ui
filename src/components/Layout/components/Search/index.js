import { useState, useEffect, useRef, useCallback } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [showLoading, setLoading] = useState(false);
   const searchRef = useRef();

   const debounced = useDebounce(searchValue, 1000);

   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }
      setLoading(true);

      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
         .then((res) => res.json())
         .then((res) => {
            setSearchResult(res.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [debounced]);

   const handleClear = () => {
      setSearchValue('');
      searchRef.current.focus();
   };

   const handleHideResult = useCallback(() => {
      setShowResult(false);
   }, []);
   return (
      <HeadlessTippy
         interactive
         visible={showResult && searchResult.length > 0}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  {searchResult.map((result) => (
                     <AccountItem key={result.id} data={result} />
                  ))}
               </PopperWrapper>
            </div>
         )}
         onClickOutside={handleHideResult}
      >
         <div className={cx('search')}>
            <input
               ref={searchRef}
               value={searchValue}
               placeholder="Search account and videos"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !showLoading && (
               <button onClick={handleClear} className={cx('clear')}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
