import React from 'react';

import { User } from 'types/users';

import styles from './styles.module.scss';

type UsersListProps = {
    users: User[];
};

const UsersList: React.FC<UsersListProps> = ({ users }) => (
    <ol className={styles.UsersList}>
        {users.map(({ id, name, username }) => (
            <li className={styles.ListItem} key={id}>
                {name}
                <span className={styles.UserName}>@{username}</span>
            </li>
        ))}
    </ol>
);

export default UsersList;
