console.log("Hello World!\n==========\n");

// Unable to avoid all globals
window.books = [
  { title: "The Hobbit by J.R.R. Tolkein", pages: 295, readCount: 3 },
];

// Constants
function constants() {
  const scriptConstants = {
    arraySeparatorChar: ",",
    blackStyleColor: "black",
    blueStyleColor: "blue",
    errorElementId: "error",
    errorInvalidElementMessage1: "Invalid array element",
    errorInvalidElementMessage2: "at index",
    errorSeparatorMessage: "Invalid array element separator must be a comma",
    exerciseOneElementId: "exercise-1",
    exerciseTwoElementId: "exercise-2",
    formElementId: "form",
    redStyleColor: "red",
    tr: "tr",
    td: "td",
    tableElementId: "table",
    tableBodyId: "tbody",
    tableHeadId: "thead",
  };
  return scriptConstants;
}

/*
 * Controlling function that calls other
 * functions:
 *
 * 1. arraySum()
 * 2. bookProcessing()
 * 3. Updates console.log and screen
 * 4. Reset the form
 *
 */
function controller(arrayP, bookTitleP, numberOfPagesP, numberTimesReadP) {
  console.log("Begin controller()");
  console.log(
    `Parameters = Array:"${arrayP}", BookTitle:"${bookTitleP}", NumberOfPages:"${numberOfPagesP}", NumberTimesRead:"${numberTimesReadP}"`
  );

  let book = {
    title: "",
    pages: 0,
    readCount: 0,
    bookInfo: function () {
      let bookString = `${this.title}, ${this.pages} pages, read ${this.readCount} times.`;
      return bookString;
    },
  };

  let arrayString = array.value;
  let arrayNum = arrayString.split(",");
  let sum = arraySum(arrayNum);
  // Print and log the array sum to the log and screen
  // Exercise 1 Section
  console.log("EXERCISE 1:\n==========\n");
  console.log(`SUM - [${arrayString}] = ${sum}`);
  let text = document.createTextNode(`SUM - [${arrayString}] = ${sum}`);
  let brElement = document.createElement("br");
  document.getElementById(constants().exerciseOneElementId).appendChild(text);
  document
    .getElementById(constants().exerciseOneElementId)
    .appendChild(brElement);
  let bks = bookProcessing(
    bookTitle.value,
    numberOfPages.value,
    numberTimesRead.value
  );
  let exerciseTwoOutput = `Book Info = ${bks}`;
  // Exercise 2 Section
  console.log("EXERCISE 2:\n==========\n");
  console.log(exerciseTwoOutput);
  document.getElementById(constants().exerciseTwoElementId).innerText =
    exerciseTwoOutput;
  document.getElementById(constants().exerciseTwoElementId).style.color =
    constants().blueStyleColor;

  // Populate the table
  populateScreenTable(books);

  /*
   * Loop through array using for each
   * Add to the accumulator variable sum
   * return sum to the calling function.
   */
  function arraySum(array) {
    let sum = 0;
    // Loop through the array and sum the elements
    let arrayString = array.toString();
    array.forEach((element, index, array) => {
      // Coerce elements to a number
      sum += element * 1;
    });
    return sum;
  }

  /*
   * 1. Set the book object to parameters passed in.
   * 2. Add the book object to the books array.
   * 3. Returns a book info string.
   *
   */
  function bookProcessing(titleP = "", pagesP = 0, readCountP = 0) {
    console.log("Begin bookProcessing");

    if (titleP.length == 0 || pagesP <= 0 || readCountP <= 0) {
      return null;
    } else {
      book.title = titleP;
      book.pages = pagesP * 1;
      book.readCount = readCountP * 1;
      books.push(book);
    }
    return book.bookInfo();
  }
  // Reset the form
  document.getElementById(constants().formElementId).reset();
}

/*
 * Function to populate the HTML screen table
 * with the books in the books array.
 * Books array is passed in through paramter arrayP.
 *
 */
function populateScreenTable(arrayP) {
  console.log("Begin populateScreenTable()");
  console.log(`Parameters = Array:"${arrayP}"`);

  // Delete All rows in the table body
  let table = document.getElementById(constants().tableBodyId);
  while(table.rows.length > 0) {
    table.deleteRow(0);
  }

  let tbody = document.getElementById(constants().tableBodyId);
  arrayP.forEach(populateTable);
  function populateTable(element, index, array) {
    let book = element;
    console.log(`Index Value: ${index}`);
    console.log(`Book Title: ${book.title}`);
    console.log(`Book Pages: ${book.pages}`);
    console.log(`Times Read: ${book.readCount}`);
    let row = document.createElement(constants().tr);
    let cell1 = document.createElement(constants().td);
    let cell2 = document.createElement(constants().td);
    let cell3 = document.createElement(constants().td);
    let cell4 = document.createElement(constants().td);
    cell1.innerText = `${index + 1}`;
    cell2.innerText = `${book.title}`;
    cell3.innerText = `${book.pages}`;
    cell4.innerText = `${book.readCount}`;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
}

/*
 * Form validation function.
 * This form will check the input text
 * Array on the form for the following:
 *
 * 1. Must be numeric
 * 2. A comma delimiter must be present
 * 3. If only 1 value is entered then enter the
 *    value followed by a comma ie 3,
 *
 */
function validateForm(arrayP) {
  console.log("Begin validateForm()");
  console.log(`Parameters = Array:"${arrayP}"`);

  document.getElementById(constants().errorElementId).innerText = "";
  document.getElementById(constants().errorElementId).style.color =
    constants().blackStyleColor;

  console.log(`Array value = ${array.value}`);
  let arrayString = array.value;
  if (arrayString.indexOf(constants().arraySeparatorChar) < 0) {
    console.log(constants().errorSeparatorMessage);
    document.getElementById(constants().errorElementId).innerText =
      constants().errorSeparatorMessage;
    document.getElementById(constants().errorElementId).style.color =
      constants().redStyleColor;
    return false;
  }
  let arrayNum = arrayString.split(constants().arraySeparatorChar);
  console.log(`Array = ${arrayNum}`);
  let error = false;
  arrayNum.forEach(parseArray);
  function parseArray(element, index, array) {
    if (isNaN(element)) {
      console.log(
        `${constants().errorInvalidElementMessage1} "${element}" ${
          constants().errorInvalidElementMessage2
        } ${index}`
      );
      document.getElementById(constants().errorElementId).innerText = `${
        constants().errorInvalidElementMessage1
      } "${element}" ${constants().errorInvalidElementMessage2} ${index}`;
      document.getElementById(constants().errorElementId).style.color =
        constants().redStyleColor;
      error = true;
    }
  }
  if (error) {
    return false;
  }
  return true;
}
