const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';

const createError = (msg: string): never => {
    throw new Error(msg);
}

function logBrthMsg(isBirthday: boolean, userName: string, age: number): string {
    if(isBirthday === true) {
        return `Congratulations ${userName.toUpperCase()}, age: ${age + 1}`;
    } else if(isBirthday === false) {
        return 'no brth message';
    }
    return createError('Error');
}

console.log(logBrthMsg(isBirthdayData, userNameData, ageData));