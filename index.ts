interface User {
    login: string;
    password: string;
    age: number;
    // address?: string;
    address: string | undefined;
    parents?: {
        mother?: string;
        father?: string;
    }
};

const user: User = {
    login: 'yeldos',
    password: 'qwerty',
    age: 21,
    address: 'Almaty: Abay street 26a'
};

const dbName = '12345';

function sendUserData(obj: User, db?: string): void{
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}