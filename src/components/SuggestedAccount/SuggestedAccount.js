import PropTypes from 'prop-types';
import styles from './SuggestedAccount.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('Wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('see-all')}>See all</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
