/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    
    let initialValue = init;
    let valueRoll = init;

    const increment = () => {
        valueRoll+=1;
        return valueRoll;
    }

    const decrement = () => {
        valueRoll-=1;
        return valueRoll;
    }

    const reset = () => {
        valueRoll = initialValue;
        return initialValue;
    }
    
    return { increment, decrement, reset }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */