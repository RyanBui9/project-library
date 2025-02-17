const myLibrary = [];

function Book(title, synopsis) {
    this.title = title;
    this.synopsis = synopsis;
    this.bookNumber = myLibrary.size;
}

function addBookToLibrary(title, synopsis) {
    let book = new Book(title, synopsis);
    myLibrary.push(book);
}

function displayBooks() {
    const oldTable = document.querySelector("table");
    let table = document.createElement("table");
    let row1 = document.createElement("tr");
    let row2 = document.createElement("tr");

    for (let book of myLibrary) {
        let header = document.createElement("th");
        header.textContent = book.title;
        let removeButton = Object.assign(document.createElement("button"), {
            textContent: "-",
            className: "remove-book-btn"
        });
        header.appendChild(removeButton);
        row1.appendChild(header);


        let synopsis = document.createElement("td");
        synopsis.textContent = book.synopsis;
        row2.appendChild(synopsis);
    }

    table.appendChild(row1);
    table.appendChild(row2);
    oldTable.replaceWith(table);

    const removeButtons = document.getElementsByClassName("remove-book-btn");
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });
    }
}

const body = document.querySelector("body");

const newBookButton = document.getElementById("new_book");
newBookButton.addEventListener("click", () => {
    createForm();
});

const displayBooksButton = document.getElementById("display_books");
displayBooksButton.addEventListener("click", () => {
    displayBooks();
})

function createForm() {
    const form = document.createElement("form");
    form.action = "https://httpbin.org/post";
    form.method = "post";

    const titleField = document.createElement("div");
    const titleLabel = Object.assign(document.createElement("label"), {
        for: "title",
        textContent: "Title: "
    });

    const titleInput = Object.assign(document.createElement("input"), {
        type: "text",
        name: "title",
        id: "title"
    });
    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);

    const synopsisField = document.createElement("div");
    const synopsisLabel = Object.assign(document.createElement("label"), {
        for: "synopsis",
        textContent: "Synopsis"
    });
    const synopsisInput = Object.assign(document.createElement("input"), {
        type: "text",
        name: "synopsis",
        id: "synopsis"
    });
    synopsisField.appendChild(synopsisLabel);
    synopsisField.appendChild(synopsisInput);

    const submitButton = Object.assign(document.createElement("button"), {
        type: "submit",
        textContent: "Submit",
        id: "submit"
    });

    form.appendChild(titleField);
    form.appendChild(synopsisField);
    form.appendChild(submitButton);

    const oldForm = document.querySelector("form");
    oldForm.replaceWith(form);

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const synopsis = document.getElementById("synopsis").value;
        addBookToLibrary(title, synopsis);

        const temp = document.createElement("form");
        form.replaceWith(temp);
    });
}



