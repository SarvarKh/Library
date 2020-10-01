let myLibrary = [];

const addingBookToMyLibrary = (ev)=>{
    ev.preventDefault();
    let book = {
        title: document.querySelector("#bname").value,
        author: document.querySelector("#author").value,
        pages: document.querySelector("#pages").value,
        readStatus: document.querySelector("#readStatus").value
    }
    myLibrary.push(book);
    document.querySelector("form").reset();
    console.log(myLibrary);

    let div = document.createElement("div");
    div.classList.add("book");
    //div.textContent = JSON.stringify(book);
    div.textContent = `"${book.title}" written by ${book.author}. ${book.pages} pages and I have ${book.readStatus} it.`;
    document.querySelector("#flex-container").appendChild(div);
}


document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("submit").addEventListener("submit", addingBookToMyLibrary);
})
