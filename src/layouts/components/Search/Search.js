import { useState, useEffect, useRef, useCallback } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as searchService from '~/services/searchService';
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

   const debounced = useDebounce(searchValue, 700);

   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }
      setLoading(true);

      const fetchApi = async () => {
         setLoading(true);
         const result = await searchService.search(debounced);
         setSearchResult(result);

         setLoading(false);
      };
      fetchApi();
   }, [debounced]);

   const handleClear = () => {
      setSearchValue('');
      searchRef.current.focus();
   };

   const handleHideResult = useCallback(() => {
      setShowResult(false);
   }, []);

   const handleChange = (e) => {
      const searchValue = e.target.value.trimStart();

      setSearchValue(searchValue);
   };

   const handleSubmit = (e) => e.preventDefault();
   return (
      //Using a wrapper <div> or <span> tag around the reference element solves
      //this by creating a new parentNode context.
      <div>
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
                  onChange={handleChange}
                  onFocus={() => setShowResult(true)}
               />
               {!!searchValue && !showLoading && (
                  <button onClick={handleClear} className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}
               {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

               <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                  <SearchIcon />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
