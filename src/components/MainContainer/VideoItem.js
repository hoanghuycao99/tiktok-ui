import classNames from 'classnames/bind';
import styles from './MainContainer.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function VideoItem({ avatar, username, name, text, music, video, like, comment, share }) {
    return (
        <div className={cx('list-item')}>
            <Link>
                <Image src={avatar} alt="avatar" className={cx('avatar')} />
            </Link>

            <div className={cx('contain')}>
                <div className={cx('info')}>
                    <div className={cx('author')}>
                        <Link className={cx('link-author')}>
                            <h3 className={cx('user-name')}>{username}</h3>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                            <h4 className={cx('name')}>{name}</h4>
                        </Link>
                    </div>

                    <Button outline className={cx('btn-follow')}>
                        Follow
                    </Button>

                    <div className={cx('text')}>
                        <span>{text}</span>
                    </div>

                    <h4 className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} className={cx('icon-music')} />
                        {music}
                    </h4>
                </div>

                <div className={cx('video-wrapper')}>
                    <div className={cx('video')}>
                        <video width="100%" height="100%" controls src={video} />
                    </div>

                    <div className={cx('interact')}>
                        <button className={cx('btn-interact')}>
                            <span className={cx('span-interact')}>
                                <FontAwesomeIcon icon={faHeart} className={cx('iconHeart')} />
                            </span>
                            <strong className={cx('num-interact')}>{like}</strong>
                        </button>
                        <button className={cx('btn-interact')}>
                            <span className={cx('span-interact')}>
                                <FontAwesomeIcon icon={faCommentDots} className={cx('iconHeart')} />
                            </span>
                            <strong className={cx('num-interact')}>{comment}</strong>
                        </button>
                        <button className={cx('btn-interact')}>
                            <span className={cx('span-interact')}>
                                <FontAwesomeIcon icon={faShare} className={cx('iconHeart')} />
                            </span>
                            <strong className={cx('num-interact')}>{share}</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
