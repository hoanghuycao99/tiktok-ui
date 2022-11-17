import classNames from 'classnames/bind';
import styles from './MainContainer.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);
function MainContainer() {
    const [listVideo, setListVideo] = useState([]);

    useEffect(() => {
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`)
            .then((res) => {
                setListVideo(res.data.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('Wrapper')}>
            {listVideo.map((video) => (
                <VideoItem
                    key={video.id}
                    avatar={video.user.avatar}
                    username={video.user.nickname}
                    name={video.user.first_name + ' ' + video.user.last_name}
                    text={video.description}
                    music={video.music}
                    video={video.file_url}
                    like={video.likes_count}
                    comment={video.comments_count}
                    share={video.shares_count}
                />
            ))}
        </div>
    );
}

export default MainContainer;
