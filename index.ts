const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';

// function logBrthMsg(isBirthday: boolean, userName: string, age: number): string {
//     if(isBirthday) {
//         return `Congratulations ${userName.toUpperCase()}, age: ${age + 1}`;
//     }
//     return 'Error';
// }

const logBrthMsg = (isBirthday: boolean, userName: string, age: number): string => {
    if(isBirthday) {
        return `Congratulations ${userName.toUpperCase()}, age: ${age + 1}`;
    }
    return 'Error';
}

console.log(logBrthMsg(isBirthdayData, userNameData, ageData));