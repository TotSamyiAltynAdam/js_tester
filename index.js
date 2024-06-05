;
var user = {
    login: 'yeldos',
    password: 'qwerty',
    age: 21,
    address: 'Almaty: Abay street 26a'
};
var dbName = '12345';
function sendUserData(obj, db) {
    var _a, _b;
    console.log((_b = (_a = obj.parents) === null || _a === void 0 ? void 0 : _a.father) === null || _b === void 0 ? void 0 : _b.toLowerCase(), db === null || db === void 0 ? void 0 : db.toLowerCase());
}
