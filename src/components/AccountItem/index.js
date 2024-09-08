import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

AccountItem.propTypes = {
   data: PropTypes.object,
};

function AccountItem({ data }) {
   return (
      <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
         <Image className={cx('avatar')} src={data.avatar} alt="" />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>{data.full_name}</span>
               {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <span className={cx('username')}>{data.nickname}</span>
         </div>
      </Link>
   );
}

export default AccountItem;
