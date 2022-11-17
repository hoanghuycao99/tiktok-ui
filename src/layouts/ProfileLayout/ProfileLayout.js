import classNames from 'classnames/bind';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import SidebarProfile from '~/components/SidebarProfile/SidebarProfile';
import styles from './ProfileLayout.module.scss';

const cx = classNames.bind(styles);

function ProfileLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderProfile />
            <div className={cx('container')}>
                <SidebarProfile />
                {children}
            </div>
        </div>
    );
}

export default ProfileLayout;
