// Starting and understanding of the case

/**
* Display Name
* @param {string} name Name
*/
function displayName(name) {
    return `Hi ${name}`;
}
/**
* Display Name
* @param {string} fName First Name
* @param {string} lName Last Name
* The above function will be overwritten by this function.
*/
function displayName(fName, lName) {
    return `Hi ${fName} ${lName}`;
}

let stageA = displayName("Ana");    // "Hi Ana undefined"
console.log(stageA);

let stageB = displayName("Ana", "Smith");
console.log(stageB);

function displayName(firstName, lastName) {
    if (arguments.length > 1) {
        return `Hello Ms/Mr ${firstName} ${lastName}`;
    }

    return `Hi ${firstName}`;
}

stageA = displayName("Ana");
console.log(stageA);

stageB = displayName("Ana", "Smith");
console.log(stageB);


// Arrays
let arr = [1, 2, 3, 4, 1, 2, 22, 33];
console.log("default array", arr);

Array.prototype.shiftSize = function () {
    if (!!arguments && !isNaN(arguments[0])) {
        const size = arguments[0];
        for (let i = 0; i < size; i++) {
            console.log(i);
            [].shift.call(this);
        }

        // // improved approach
        // const start = arguments[0];
        // const length = this.length;
        // let newArray = [];
        // for (let i = start; i < length; i++) {
        //     newArray.push(this[i]);
        // }

        // return newArray;
    }
}

let x = arr.shift();
console.log(x, arr);

x = arr.shift(2);
console.log(x, arr);

console.log(arr.shiftSize(2), arr);
