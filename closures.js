//counter function
function counterFunc() {
    let count = 0;  //outer scope

    function increase() {
        count++;  //outer scope var gets modified
        console.log("Count is:", count);
    }

    return increase;  //returning the inner function (closure)
}

let counter = counterFunc();  //calling outer function
counter();  //"Count is: 1"
counter();  //"Count is: 2"
counter();  //"Count is: 3"