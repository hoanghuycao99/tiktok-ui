import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    upload = false,
    passProbs,
    children,
}) {
    let Comp = 'button';

    const classess = cx('wrapper', { primary, outline, upload });

    const probs = {
        onClick,
        leftIcon,
        rightIcon,
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
            {leftIcon && <span className={cx('leftIcon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('rightIcon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
