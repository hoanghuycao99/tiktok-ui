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
    passProbs,
    children,
    className,
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

export default Button;
