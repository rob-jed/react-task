import React from 'react';

import { classNames } from 'services/Styles';

import styles from './styles.module.scss';

type ContainerProps = {
    className?: string;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => (
    <div className={classNames(styles.Container, className)}>{children}</div>
);

export default Container;
