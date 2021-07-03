console.log("Hello World!\n==========\n");

// Globals
const errorElementId = "error";
const error = document.getElementById(errorElementId);

function validateForm() {
    console.log("Begin validateForm()");

    error.innerText="";
    error.style.color = "black";

    console.log(`Array value = ${array.value}`);
    let arrayString = (array.value);
    let arrayNum = arrayString.split(",");
    console.log(`Array = ${arrayNum}`);
    arrayNum.forEach(parseArray)
    function parseArray(element,index,array) {
        if(isNaN(element)) {
            console.log(`Invalid array element "${element}" at index ${index}`);
            error.innerText=`Invalid array element "${element}" at index ${index}`;
            error.style.color="red";
        }
        
    };
    return false;
}

function controller(obj) {
    console.log("Begin controller");
}

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


