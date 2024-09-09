import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div tabIndex="-1" {...props}>
            <Wrapper>
               <AccountPreview />
            </Wrapper>
         </div>
      );
   };

   return (
      <div>
         <Tippy offset={[-20, 0]} interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
               <img
                  className={cx('avatar')}
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/474b7b1931b6fc1538c81810c4867fae.jpeg?lk3s=a5d48078&nonce=80021&refresh_token=4f01fdc7838ebf1b1fa24216eb5a933b&x-expires=1726063200&x-signature=Pl8t4Qxbn3yV9h6s5k1nCuwQZqo%3D&shp=a5d48078&shcp=81f88b70"
                  alt="avatar"
               />
               <div className={cx('item-info')}>
                  <h4 className={cx('nickname')}>
                     <strong>lelinh123</strong>
                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                  </h4>
                  <p className={cx('name')}>lelinhnhi</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

// AccountItem.propTypes = {
//    preview: PropTypes.bool,
// };

export default AccountItem;
