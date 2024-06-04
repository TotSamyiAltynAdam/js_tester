const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error'
    }
}

const userDataTuple: [...boolean[], number, string] = [true, false, 40, 'John'];

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