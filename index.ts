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

let dbName: string;
sendUserData(user, 'efvenienf');

console.log(dbName!);

function sendUserData(obj: User, db?: string): void{
    dbName = '12344';
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}