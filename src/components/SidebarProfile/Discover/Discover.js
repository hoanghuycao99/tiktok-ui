import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('discover')}>
            <p className={cx('label')}>Discover</p>
            <div className={cx('discover-item')}>
                <Button className={cx('btn-dis')} upload>
                    # suthatla
                </Button>
                <Button className={cx('btn-dis')} upload>
                    # mackedoi
                </Button>
                <Button className={cx('btn-dis')} upload>
                    Yêu Đơn Phương Là Gì (MEE Remix)
                </Button>
                <Button className={cx('btn-dis')} upload>
                    Yêu Đơn Phương Là Gì (MEE Remix)
                </Button>
                <Button className={cx('btn-dis')} upload>
                    Yêu Đơn Phương Là Gì (MEE Remix)
                </Button>
                <Button className={cx('btn-dis')} upload>
                    Yêu Đơn Phương Là Gì (MEE Remix)
                </Button>
                <Button className={cx('btn-dis')} upload>
                    suthatla
                </Button>
                <Button className={cx('btn-dis')} upload>
                    suthatla
                </Button>
                <Button className={cx('btn-dis')} upload>
                    Yêu Đơn Phương Là Gì (MEE Remix)
                </Button>
                <Button className={cx('btn-dis')} upload>
                    Yêu Đơn Phương Là Gì (MEE Remix)
                </Button>
            </div>
        </div>
    );
}

export default Discover;
