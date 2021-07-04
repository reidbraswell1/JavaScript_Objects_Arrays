console.log("Hello World!\n==========\n");

// Constants
function constants() {
  const DOM_ElementIDs = {
    errorElementId: "error",
    errorStyleColor: "red",
    normalStyleColor: "black",
    errorId: function () {
      let id = document.getElementById(this.errorElementId);
      return id;
    },
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
  let arrayNum = arrayString.split(",");
  console.log(`Array = ${arrayNum}`);
  arrayNum.forEach(parseArray);
  function parseArray(element, index, array) {
    if (isNaN(element)) {
      console.log(`Invalid array element "${element}" at index ${index}`);
      error.innerText = `Invalid array element "${element}" at index ${index}`;
      error.style.color = constants().errorStyleColor;
    }
  }
  return false;
}

function controller(obj) {
  console.log("Begin controller");
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
