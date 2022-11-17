import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('preview')}>
            <div className={cx('header')}>
                <Image src={data.avatar} alt="avatar" />
                <Button primary>Follow</Button>
            </div>

            <div className={cx('info')}>
                <p className={cx('username')}>
                    <strong>{data.nickname}</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </p>
                <p className={cx('name')}>
                    {data.first_name} {data.last_name}
                </p>
            </div>

            <p className={cx('interactive')}>
                <span className={cx('num-follow')}>{data.followers_count}</span>
                <span className={cx('follow-like')}>Followers</span>
                <span className={cx('num-follow')}>{data.likes_count}</span>
                <span className={cx('follow-like')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
