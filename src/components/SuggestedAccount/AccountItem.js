import styles from './SuggestedAccount.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                animation={false}
                interactive
                delay={[900, null]}
                offset={[-20, 0]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/313856947_792375608503062_8955954126785057893_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uN-Ax18StFkAX8Pyb-x&_nc_oc=AQlHAp0j1owOWD3PcB8dfl8AzCWPhXSlxIuhJxMMQ51gIRjNNX1FCg5GRk0gcd9tghM9neUgeUcz-51MYE7WB5l4&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdRpqO58jbPNuPcPaUZ9TwhPu_veZ0V8JuwTF0P9hwvXgg&oe=6392FFBE"
                        alt="avatar"
                    />
                    <div className={cx('info')}>
                        <p className={cx('username')}>
                            <strong>theanh28entertainment</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                        </p>
                        <p className={cx('name')}>Theanh28 Entertainment</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
export default AccountItem;
