import React from 'react';

import styles from './styles.module.scss';

const PageHeader: React.FC = ({ children }) => (
    <h1 className={styles.PageHeader}>{children}</h1>
);

export default PageHeader;
