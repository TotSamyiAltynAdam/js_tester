// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = 'John';

const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

const userObj: {
    isBirthdayData: boolean;
    userNameData: string;
    ageData: number;
} = JSON.parse(userData);

function logBrthMsg(isBirthday: boolean, userName: string, age: number): string {
    if(isBirthday) {
        return `Congratulations ${userName.toUpperCase()}, age: ${age + 1}`;
    }
    return 'Error';
}

console.log(logBrthMsg(isBirthdayData, userNameData, ageData));