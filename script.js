const myLibrary = [];

function Book(name, numPages, synopsis) {
    this.name = name;
    this.numPages = numPages;
    this.synopsis = synopsis;
}

function addBookToLibrary(name, numPages, synopsis) {
    let book = new Book(name, numPages, synopsis);
    myLibrary.push(book);
}

function displayBooks() {
    for (let book in myLibrary) {
        console.log(book);
    }
}
