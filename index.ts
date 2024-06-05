let msg: 'Hello' = 'Hello';

msg = 'Hello';

type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };
type Role = { role: string; };

type ConfigWithRole = Config & Role;


const serverConfig: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin'
};

const backupConfig: ConfigWithRole = {
    protocol: 'http',
    port: 3000,
    role: 'sysadmin'
};

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const startServer: StartFunction = (
    protocol: 'http' | 'https', 
    port: 3000 | 3001
): 'Server started' => {
    console.log(`Server started on ${protocol}://server:${port}`);

    return 'Server started';
}

startServer(serverConfig.protocol, serverConfig.port);

type AnimationID = string | number;
type AnimationTimingFunc = 'ease' | 'ease-in' | 'ease-out';

function createAnimation(
    id: AnimationID,
    animName: string,
    timingFunc: AnimationTimingFunc = 'ease',
    duration: number,
    iterCount: 'infinite' | number
): void {
    //const elem = document.querySelector(`#${id}`) as HTMLElement;

    //if(elem) {
        console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
       // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    //}
}

createAnimation('id', 'animName', 'ease', 5, 'infinite');