import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    lefticon,
    righticon,
    primary = false,
    outline = false,
    upload = false,
    children,
    className,
    ...passProbs
}) {
    let Comp = 'button';

    const classess = cx('wrapper', { primary, outline, upload }, className);

    const probs = {
        onClick,
        lefticon,
        righticon,
        ...passProbs,
    };

    if (to) {
        probs.to = to;
        Comp = Link;
    } else if (href) {
        probs.href = href;
    }

    return (
        <Comp className={classess} {...probs}>
            {lefticon && <span className={cx('leftIcon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('rightIcon')}>{righticon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    upload: PropTypes.string,
    passProbs: PropTypes.string,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;
