import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/277522933_2594413757369627_6134992832076918398_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rTgfKNpmzygAX_YFimY&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfCyBE7u-8cMlX_ubw5JrE8eLR4R7mPooJAMDGF0ufGotw&oe=6367C7BD"
                alt="avatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Cao Hoang</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </p>
                <p className={cx('username')}>caohoang</p>
            </div>
        </div>
    );
}

export default AccountItem;
