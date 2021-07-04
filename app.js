console.log("Hello World!\n==========\n");

// Globals
const errorElementId = "error";
const error = document.getElementById(errorElementId);


let book = {
        // Return an array of strings containing book info
        bookInfo: function () {
            let bookInfo = [];
            book.forEach(function (value, index,array) {
              let bookString = `${book.title}, ${book.pages} pages, read ${book.readCount} times.`;
              bookInfo.append(bookString);  
            })
            return bookInfo;
        },
        bookAdd(bookTitle, bookPages, bookNbrTimesRead) {
            book.title=bookTitle,
            book.pages=bookPages,
            book.readCount=bookNbrTimesRead;
        }
}

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

// Function to add or get the books from the book object.
function processBook (operation, bookTitle, bookPages, bookNbrTimesRead) {
    switch(operation) {
        case "post":
            book.bookAdd(bookTitle, bookPages, bookNbrTimesRead);
            break;
        case "get":
            return book.bookInfo();
            break;
    }
}
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


