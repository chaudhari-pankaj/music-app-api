const shuffle = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random()*(i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    //no return statement because objects are passed by reference in JS => changes reflected in-place
};

module.exports = { shuffle };