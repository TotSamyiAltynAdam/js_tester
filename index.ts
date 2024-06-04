// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = 'John';

const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error'
    }
}

const createError = (msg: string): never => {
    throw new Error(msg);
}

function logBrthMsg({ //destructurization
    isBirthdayData, 
    userNameData, 
    ageData,
    messages: {error}
}: { //anotation
    isBirthdayData: boolean, 
    userNameData: string, 
    ageData: number,
    messages: {error: string}
}): string {
    if(isBirthdayData) {
        return `Congratulations ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error);
    }
}

console.log(logBrthMsg(userData));

const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];

const report = departments
                        .filter((d: string) => d !== 'dev')
                        .map((d: string) => `${d} - done`);

const [first] = report;
console.log(first);

const nums: number[] = [1, 2, 3];
const matrix: number[][] = [[1, 2, 3], [4, 5, 6]];
