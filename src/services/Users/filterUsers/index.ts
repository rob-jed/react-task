import { User } from 'types/users';

const filterUsers = (query: string, users: User[]) =>
    users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );

export default filterUsers;
