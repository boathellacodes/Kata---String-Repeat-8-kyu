let repeater = 6;
let item = "Harry";

repeatStr(6, "I")

// scratch pad

for (i = 0; i < repeater; i++) {
    console.log(item)
}


// 1st attempt

function repeatStr (repeater, item) {
    for (i = 0; i < repeater; i++) {
       console.log(item)

       // need to remove commas
    }

}

// 2nd attempt

function repeatString (item, repeater) {
    let str = '';
    for (let i = 0; i < repeater; i++) {
        str += str;
    }
    return str;
}



// Winner WInner...
console.log(item.repeat(repeater))

// refined
function stringRepeat (item, repeater) {
    return item.repeat(repeater);
}


// Test
console.log(repeatStr("hello", 8));
console.log(stringRepeat("hello", 8));

