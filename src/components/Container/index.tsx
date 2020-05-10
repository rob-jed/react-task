import React from 'react';

import styles from './styles.scss';

const Container: React.FC = ({ children }) => (
    <div className={styles.Container}>{children}</div>
);

export default Container;
