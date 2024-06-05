var msg = 'Hello';
msg = 'Hello';
var serverConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin'
};
var backupConfig = {
    protocol: 'http',
    port: 3000,
    role: 'sysadmin'
};
var startServer = function (protocol, port) {
    console.log("Server started on ".concat(protocol, "://server:").concat(port));
    return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port);
function createAnimation(id, animName, timingFunc, duration, iterCount) {
    //const elem = document.querySelector(`#${id}`) as HTMLElement;
    if (timingFunc === void 0) { timingFunc = 'ease'; }
    //if(elem) {
    console.log("".concat(animName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
    // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    //}
}
createAnimation('id', 'animName', 'ease', 5, 'infinite');
