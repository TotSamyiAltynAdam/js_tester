Function.prototype.callPolyfill = function(context, ...args) {
    const symbolId = Symbol();
    context[symbolId] = this;
    return context[symbolId](...args);
}

function increment() { 
    this.count++; 
    return this.count; 
}

console.log(increment.callPolyfill(
    {count: 1}
)); 