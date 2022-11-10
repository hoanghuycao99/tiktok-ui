import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('preview')}>
            <div className={cx('header')}>
                <img
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/313856947_792375608503062_8955954126785057893_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uN-Ax18StFkAX8Pyb-x&_nc_oc=AQlHAp0j1owOWD3PcB8dfl8AzCWPhXSlxIuhJxMMQ51gIRjNNX1FCg5GRk0gcd9tghM9neUgeUcz-51MYE7WB5l4&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdRpqO58jbPNuPcPaUZ9TwhPu_veZ0V8JuwTF0P9hwvXgg&oe=6392FFBE"
                    alt="avatar"
                />
                <Button primary>Follow</Button>
            </div>

            <div className={cx('info')}>
                <p className={cx('username')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>
            </div>

            <p className={cx('interactive')}>
                <span className={cx('num-follow')}>7.9M</span>
                <span className={cx('follow-like')}>Followers</span>
                <span className={cx('num-follow')}>569.4M</span>
                <span className={cx('follow-like')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
