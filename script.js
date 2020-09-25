//getting input from user
let bnameUserInput = document.getElementById("bname").value;
let authorUserInput = document.getElementById("author").value;
let pagesUserInput = document.getElementById("pages").value;
let readStatusUserInput = document.getElementById("readStatus").value;

let submitBookInfo = document.getElementById("submit");
let book1 = document.getElementById("book1");



//Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


let myLibrary = [];
function addBookToLibrary() {
    let singleBook = new Book(bnameUserInput, authorUserInput, pagesUserInput, readStatusUserInput);
    myLibrary.push(singleBook);
    let divBook = document.createElement("div");
    divBook.classList.add("divBook");
    book1.appendChild(myLibrary);
}

function crEl(type){
    return document.createElement(type);
}

submitBookInfo.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstP = crEl("p");
    let secondP = crEl("p");
    let thirdP = crEl("p");
    let fourthP = crEl("p");

    book1.appendChild(firstP);
    book1.appendChild(secondP);
    book1.appendChild(thirdP);
    book1.appendChild(fourthP);


    firstP.innerHTML = bnameUserInput;
    secondP.innerHTML = authorUserInput;
    thirdP.innerHTML = pagesUserInput;
    fourthP.innerHTML = readStatusUserInput;
});


//Relecting inputted book info to books on the shelter
// book1.innerHTML = myLibrary[0];
// document.getElementById("book2").innerHTML = myLibrary[1];
// document.getElementById("book3").innerHTML = myLibrary[2];
