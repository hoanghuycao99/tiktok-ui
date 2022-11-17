import classNames from 'classnames/bind';
import styles from './HeaderProfile.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faEarthAsia,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import TippyHead from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Search';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Login from '~/components/Login';
import { getToken } from '~/utils/Login';

const cx = classNames.bind(styles);

function HeaderProfile({ className }) {
    const classess = cx('wrapper', className);
    let currentuser = false;
    const [modalShow, setModalShow] = useState(false);

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'Enlish',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
        },
    ];
    return (
        <>
            <header className={classess}>
                <Link className={cx('logo')} to={'/'}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {<Search />}

                <div className={cx('actions')}>
                    {!getToken ? (
                        <>
                            <TippyHead delay={(0, 50)} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </TippyHead>
                            <TippyHead delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </TippyHead>
                            <TippyHead delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </TippyHead>
                        </>
                    ) : (
                        <>
                            <Button upload lefticon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary onClick={() => setModalShow(true)}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={!getToken ? userMenu : MENU_ITEMS}>
                        {!getToken ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/277522933_2594413757369627_6134992832076918398_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N1kepntUP0gAX_ORh3x&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfCSmWMtqD5T5OSzthEO96N_2ELxWnN2z1XJRc8r8J2jgg&oe=636DB67D"
                                alt="Hoang Huy"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </header>

            <Login state={modalShow} />
        </>
    );
}

export default HeaderProfile;
