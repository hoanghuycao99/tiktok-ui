import classNames from 'classnames/bind';
import styles from './MainProfile.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProfileItem from './ProfileItem';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function MainProfile() {
    const [profile, setProfile] = useState({});
    const params = window.location.pathname;
    const url = useLocation();

    useEffect(() => {
        console.log(params);
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users${params}`)
            .then((res) => {
                setProfile(res.data.data);
            })
            .catch((error) => console.log(error));
    }, [url]);

    return (
        <div className={cx('Wrapper')}>
            <ProfileItem
                avatar={profile.avatar}
                username={profile.nickname}
                name={profile.first_name + ' ' + profile.last_name}
                following={profile.followings_count}
                follow={profile.followers_count}
                like={profile.likes_count}
                bio={profile.bio}
                link={profile.facebook_url}
                video={profile.videos}
            />
        </div>
    );
}

export default MainProfile;
