import classNames from 'classnames/bind';
import styles from './MainProfile.module.scss';
import Image from '../Image';
import Button from '../Button';
import { DotsRowIcon, LinkIcon, LockIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

function ProfileItem({ avatar, username, name, following, follow, like, bio, link, video }) {
    return (
        <div className={cx('main-contain')}>
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <Image className={cx('avatar')} alt="avatar" src={avatar} />
                    <div className={cx('user-info')}>
                        <h1 className={cx('user-name')}>{username}</h1>
                        <h2 className={cx('name')}>{name}</h2>
                        <div className={cx('wrapper-btn-follow')}>
                            <Button primary className={cx('btn-follow')}>
                                Follow
                            </Button>
                        </div>
                    </div>
                </div>

                <h2 className={cx('interact')}>
                    <div className={cx('following')}>
                        <strong className={cx('num-following')}>{following}</strong>
                        <span className={cx('title')}>Following</span>
                    </div>

                    <div className={cx('following')}>
                        <strong className={cx('num-following')}>{follow}</strong>
                        <span className={cx('title')}>Follows</span>
                    </div>

                    <div className={cx('following')}>
                        <strong className={cx('num-following')}>{like}</strong>
                        <span className={cx('title')}>Likes</span>
                    </div>
                </h2>

                <h2 className={cx('bio')}>{bio}</h2>

                <div className={cx('link')}>
                    <a href={link} className={cx('linkfb')}>
                        <LinkIcon />
                        <span className={cx('link-text')}>{link}</span>
                    </a>
                </div>

                <div className={cx('share')}>
                    <ShareIcon />
                </div>

                <div className={cx('options')}>
                    <DotsRowIcon />
                </div>
            </div>

            <div className={cx('video-list')}>
                <div className={cx('switch')}>
                    <p className={cx('choose-videos')}>Videos</p>

                    <p className={cx('choose-liked')}>{<LockIcon />} Liked</p>

                    <div className={cx('underline')}></div>
                </div>

                <div className={cx('list')}>
                    <div className={cx('item-list')}>
                        {video &&
                            video.map((result) => (
                                <div key={result.id} classname={cx('item')}>
                                    <div className={cx('video')}>
                                        <img className={cx('img-video')} src={result.thumb_url} alt="" />
                                    </div>
                                    <div className={cx('video-des')}>
                                        <p className={cx('height')}>{result.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;
