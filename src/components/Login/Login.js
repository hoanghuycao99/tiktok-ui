import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { removeUserSession, setUserSession } from '~/utils/Login';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Login({ state }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleClose = () => {
        state = false;
    };

    function handleLogin() {
        axios
            .post('https://tiktok.fullstack.edu.vn/api/auth/login', {
                email: username,
                password: password,
            })
            .then((response) => {
                console.log('response: ', response);
                setUserSession(response.data.meta.token, response.data.data);
                handleClose();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    return (
        <Modal className={cx('modal')} show={state} onHide={handleClose}>
            <Modal.Header closeButton className={cx('modal-header')}>
                <Modal.Title>Đăng nhập vào TikTok</Modal.Title>
            </Modal.Header>
            <Modal.Body className={cx('modal-body')}>
                <input
                    className={cx('input-username')}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className={cx('input-pass')}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link className={cx('div-modal-btn-login')} to="/">
                    <Button className={cx('modal-btn-login')} outline onClick={handleLogin}>
                        Log in
                    </Button>
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <div>
                    <span>Bạn không có tài khoản?</span>
                    <span> Đăng ký</span>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default Login;
