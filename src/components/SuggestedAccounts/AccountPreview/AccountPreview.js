import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <header className={cx('header')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/474b7b1931b6fc1538c81810c4867fae.jpeg?lk3s=a5d48078&nonce=80021&refresh_token=4f01fdc7838ebf1b1fa24216eb5a933b&x-expires=1726063200&x-signature=Pl8t4Qxbn3yV9h6s5k1nCuwQZqo%3D&shp=a5d48078&shcp=81f88b70"
               alt="avatar"
            />
            <div>
               <Button className={cx('follow-btn')} primary>
                  Follow
               </Button>
            </div>
         </header>
         <div className={cx('body')}>
            <h4 className={cx('nickname')}>
               <strong>lelinh123</strong>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <p className={cx('name')}>lelinhnhi</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>8.2M </strong>
               <span className={cx('label')}>Followers</span>
               <strong className={cx('value')}>8.2M </strong>
               <span className={cx('label')}>Like</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
