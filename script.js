const input = document.querySelector('input'),
    defaultText = document.querySelector('#default'),
    debounceText = document.querySelector('#debounce'),
    throttleText = document.querySelector('#throttle');

const updateDebounceText = debounce(() => {
//    debounceText.textContent = text;
    incrementCount(debounceText);
});
const updateThrottleText = throttle(() => {
//    throttleText.textContent = text;
    incrementCount(throttleText);
}, 100)
// input.addEventListener('input', e => {
//     defaultText.textContent = e.target.value;
//     updateDebounceText(e.target.value);
//     updateThrottleText(e.target.value);
// });

function debounce(callback, delay = 1000){
    let timeout;
    
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args)
        }, delay);
    }
}

function throttle(callback, delay = 1000){
    let shouldWait = false;
    let waitingArgs;

    const timeoutFunc = () => {
        if(waitingArgs == null){
            shouldWait = false;
        } else {
            callback(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    }

    return (...args) => {
        if(shouldWait){
            waitingArgs = args;
            return;
        }

        callback(...args);
        shouldWait = true;

        setTimeout(timeoutFunc, delay);
    }
}

document.addEventListener('mousemove', e => {
    incrementCount(defaultText);
    updateDebounceText();
    updateThrottleText();
});

function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
}

