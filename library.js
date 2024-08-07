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

Book.prototype.convertToBookCard = function() {
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
    return bookCard;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

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
    for (const book of myLibrary) {
        container.appendChild(book.convertToBookCard());
    }
}

displayLibrary();