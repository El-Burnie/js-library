function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let infoString= `${this.title} by ${this.author}, ${this.pages} pages,`;
        if (this.read) {
            infoString += " read";
        } else {
            infoString += " not read yet";
        }
        return infoString;
    };
}
