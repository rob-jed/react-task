import { User } from 'types/users';

const getUsers = (): Promise<User[]> =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .catch((error) => console.error(error));

export default getUsers;
