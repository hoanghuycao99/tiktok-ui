import PropTypes from 'prop-types';
import styles from './SuggestedAccount.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import * as suggestAccount from '~/services/suggestAccountService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    const [suggestList, setSuggestList] = useState([]);
    const [length, setLength] = useState('5');
    const [btnexpand, setBtnexpand] = useState(true);

    function handleList() {
        setLength('20');
        setBtnexpand(false);
    }

    function handleListless() {
        setLength('5');
        setBtnexpand(true);
    }

    useEffect(() => {
        const fetchApi = async () => {
            const result = await suggestAccount.suggestAccount('1', length);
            setSuggestList(result);
        };

        fetchApi();
    }, [length]);

    return (
        <div className={cx('Wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggestList.map((results) => (
                <AccountItem key={results.id} data={results} />
            ))}

            {btnexpand ? (
                <p onClick={handleList} className={cx('see-all')}>
                    See all
                </p>
            ) : (
                <p onClick={handleListless} className={cx('see-less')}>
                    See less
                </p>
            )}
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
