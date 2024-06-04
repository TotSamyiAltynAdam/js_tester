// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = 'John';
var userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error'
    }
};
var createError = function (msg) {
    throw new Error(msg);
};
function logBrthMsg(_a) {
    var //destructurization
    isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.messages.error;
    if (isBirthdayData) {
        return "Congratulations ".concat(userNameData.toUpperCase(), ", age: ").concat(ageData + 1);
    }
    else {
        return createError(error);
    }
}
console.log(logBrthMsg(userData));
