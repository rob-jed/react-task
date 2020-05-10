import React from 'react';

import Container from 'components/Container';
import Input from 'components/Input';
import PageHeader from 'components/PageHeader';

const Home = () => {
    return (
        <Container>
            <PageHeader>Users list</PageHeader>
            <Input placeholder="Search by user name..." type="text" />
        </Container>
    );
};

export default Home;
