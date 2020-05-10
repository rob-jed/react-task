import React, { HTMLProps } from 'react';

import { classNames } from 'services/Styles';

import styles from './styles.module.scss';

const Input: React.FC<HTMLProps<HTMLInputElement>> = ({ ...inputProps }) => (
    <input
        {...inputProps}
        className={classNames(styles.Input, inputProps.className)}
    />
);

export default Input;
