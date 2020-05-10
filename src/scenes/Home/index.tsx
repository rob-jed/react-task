import React, { useEffect, useState } from 'react';

import Container from 'components/Container';
import Input from 'components/Input';
import PageHeader from 'components/PageHeader';
import Spinner from 'components/Spinner';
import UsersList from 'components/UsersList';

import { getUsers } from 'services/APIQueries';
import { filterUsers } from 'services/Users';

import { User } from 'types/users';

import styles from './styles.module.scss';

const Home = () => {
    const [users, setUsers] = useState<User[]>();
    const [query, setQuery] = useState('');

    useEffect(() => {
        getUsers().then((response) => setUsers(response));
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;

        setQuery(value);
    };

    if (!users) {
        return <Spinner />;
    }

    const filteredUsers = filterUsers(query, users);

    return (
        <Container className={styles.HomePage}>
            <PageHeader>Users list</PageHeader>
            <Input
                className={styles.FilterUsersInput}
                onChange={onChange}
                placeholder="Search by user name..."
                type="text"
            />
            <div className={styles.ResultsContainer}>
                {filteredUsers.length > 0 ? (
                    <UsersList users={filteredUsers} />
                ) : (
                    <h2 className={styles.NoResults}>Brak wyników</h2>
                )}
            </div>
        </Container>
    );
};

export default Home;
