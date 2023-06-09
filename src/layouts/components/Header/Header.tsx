import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header: FC = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Header</h2>
            </div>
        </header>
    );
};

export default Header;
