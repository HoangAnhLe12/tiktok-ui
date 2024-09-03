import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/af012a75f6e298af0a92c430be935485.jpeg?lk3s=30310797&nonce=54836&refresh_token=ea6bd22fcaaaa5a166d2300c4fc28c18&x-expires=1725458400&x-signature=dQX9j%2BojPQ9TG85C%2BhL2X1fJOBU%3D&shp=30310797&shcp=-"
            alt=""
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;
