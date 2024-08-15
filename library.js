const newBookModal = document.querySelector("dialog");
const newBookModalButton = document.getElementById("newBookModal");
const closeModalButton = document.getElementById("closeModal");
const newBookForm = document.querySelector("form");
const container = document.querySelector(".container");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let infoString = `${this.title} by ${this.author}, ${this.pages} pages,`;
        if (this.read) {
            infoString += " read";
        } else {
            infoString += " not read yet";
        }
        return infoString;
    };
}

// creates and returns a DOM element that displays all the Book values
// index is required to acess myLibrary to make changes
Book.prototype.convertToBookCard = function(index) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = this.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = this.author;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.textContent = this.pages;
    bookCard.appendChild(bookPages);

    const bookRead = document.createElement("p");
    if (this.read) {
        bookRead.textContent = "read";
    } else {
        bookRead.textContent = "not read yet"
    }
    bookCard.appendChild(bookRead);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        displayLibrary();
    });
    bookCard.appendChild(deleteButton);

    return bookCard;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Used to populate the page for easier styling
const testBook1 = new Book("The Giving Tree", "Shel Silverstein", 64, true);
const testBook2 = new Book("The Way of Kings", "Brandon Sanderson", 1280, false);
const testBook3 = new Book("Dune", "Frank Herbert", 704, true);
addBookToLibrary(testBook1);
addBookToLibrary(testBook2);
addBookToLibrary(testBook3);

function clearDisplay() {
    const bookCards = document.querySelectorAll(".book-card");
    bookCards.forEach((bookCard) => { bookCard.remove() });
}

function displayLibrary() {
    clearDisplay();
    for (let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i]
        container.appendChild(book.convertToBookCard(i));
    }
}

newBookModalButton.addEventListener("click", () => {
    newBookModal.showModal();
});

closeModalButton.addEventListener("click", () => {
    newBookModal.close();
});

// Creates a new book with form data, displays it and resets the form
newBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = newBookForm.elements;
    let read = (inputs["read"].value === "read")
    let newBook = new Book(inputs["title"].value, inputs["author"].value, inputs["pages"].value, read)
    addBookToLibrary(newBook);
    newBookModal.close();
    newBookForm.reset();
    displayLibrary();
});

displayLibrary();