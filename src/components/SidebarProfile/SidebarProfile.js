import classNames from 'classnames/bind';
import config from '~/config';
import styles from './SidebarProfile.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, FollowingIcon, LiveIcon, HomeActiveIcon, FollowingActiveIcon, LiveActiveIcon } from '../Icons';
import Button from '../Button';
import SuggestedAccount from '../SuggestedAccount';
import Discover from './Discover';
import { getToken } from '~/utils/Login';

const cx = classNames.bind(styles);

function SidebarProfile() {
    let currentUser = false;
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem icon={<HomeIcon />} iconactive={<HomeActiveIcon />} title="For You" to={config.routes.home} />
                <MenuItem
                    icon={<FollowingIcon />}
                    iconactive={<FollowingActiveIcon />}
                    title="Following"
                    to={config.routes.following}
                />
                <MenuItem icon={<LiveIcon />} iconactive={<LiveActiveIcon />} title="LIVE" to={config.routes.live} />
            </Menu>

            {getToken && (
                <div className={cx('Login')}>
                    <p className={cx('Login-title')}>Log in to follow creators, like videos, and view comments.</p>
                    <Button outline className={cx('Login-btn')}>
                        Log in
                    </Button>
                </div>
            )}

            <SuggestedAccount label="Suggested accounts" />

            {getToken && <SuggestedAccount label="Following accounts" />}

            <Discover />
        </aside>
    );
}

export default SidebarProfile;
