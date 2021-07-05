console.log("Hello World!\n==========\n");

// Constants
function constants() {
  const DOM_ElementIDs = {
    errorElementId: "error",
    exerciseOneElementId: "exercise-1",
    exerciseTwoElementId: "exercise-2",
    errorStyleColor: "red",
    normalStyleColor: "black",
    arraySeparatorChar: ",",
    errorSeparatorMessage: "Invalid array element separator must be a comma",
    errorInvalidElementMessage1: "Invalid array element",
    errorInvalidElementMessage2: "at index",
    errorId: function () {
      let id = document.getElementById(this.errorElementId);
      return id;
    },
    exerciseOneId: function () {
      let id = document.getElementById(this.exerciseOneElementId);
      return id;
    },
    exerciseTwoId: function () {
      let id = document.getElementById(this.exerciseTwoElementId);
      return id;
    }
  };
  return DOM_ElementIDs;
}

// Book object
function bookProcessing(titleP="", pagesP=0, readCountP=0, bookInfoP = []) {
  if (titleP.length == 0 || pagesP <= 0 ||  readCountP <= 0) {
    return null;
  }
  let book = {
    title: titleP,
    pages: pagesP,
    readCount: readCountP,
    bookInfoAcumulator: bookInfoP,
    // Return an array of strings containing book info
    bookInfo: function () {
      let bookString = `${this.title}, ${this.pages} pages, read ${this.readCount} times.`;
      bookInfoAcumulator.push(bookString);
      return bookInfoP;
    },
  };
  return book;
}

function validateForm() {
  console.log("Begin validateForm()");

  constants().errorId().innerText = "";
  constants().errorId().style.color = constants().normalStyleColor;

  console.log(`Array value = ${array.value}`);
  let arrayString = array.value;
  if(arrayString.indexOf(constants().arraySeparatorChar) == 0) {
    console.log(constants().errorSeparatorMessage);
    constants().errorId().innerText = constants().errorSeparatorMessage;
    constants().errorId().style.color = constants().errorStyleColor;
    return false;
  }
  let arrayNum = arrayString.split(constants().arraySeparatorChar);
  console.log(`Array = ${arrayNum}`);
  let error = false;
  arrayNum.forEach(parseArray);
  function parseArray(element, index, array) {
    if (isNaN(element)) {
      console.log(`${constants().errorInvalidElementMessage1} "${element}" ${constants().errorInvalidElementMessage2} ${index}`);
      constants().errorId().innerText = `${constants().errorInvalidElementMessage1} "${element}" ${constants().errorInvalidElementMessage2} ${index}`;
      constants().errorId().style.color = constants().errorStyleColor;
      error = true;
    }
  }
  if (error) {
    return false;
  }
  return true;
}

function controller(obj) {
  console.log("Begin controller");
  let arrayString = array.value;
  let arrayNum = arrayString.split(",");
  sumArray(arrayNum)
}

function sumArray(array) {
  let sum = 0;
  // Loop through the array and sum the elements
  let arrayString = array.toString();
  array.forEach((element, index, array) => {
    // Coerce elements to a number
    sum += element * 1;
  });
  // Print and log the sum to the log and screen
  console.log(`SUM - [${arrayString}] = ${sum}`);
  let text = document.createTextNode(`SUM - [${arrayString}] = ${sum}`);
  let brElement = document.createElement('br');
  constants().exerciseOneId().appendChild(text);
  constants().exerciseOneId().appendChild(brElement);

}

// Function to add or get the books from the book object.
function processBook(operation, bookTitle, bookPages, bookNbrTimesRead) {
  switch (operation) {
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
