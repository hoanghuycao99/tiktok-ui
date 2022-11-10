import classNames from 'classnames/bind';
import Header from '../Header';
import Sidebar from '~/components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function defaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default defaultLayout;
