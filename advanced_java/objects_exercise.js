const myLibrary = [];

function Book(title, author, number_pages, read) {
    this.title = title;
    this.author = author;
    this.number_pages = number_pages;
    this.read = read;
}

// Function to add a book to the library and immediately display it
function addBookToLibrary(title, author, number_pages, read) {
    const newBook = new Book(title, author, number_pages, read);
    myLibrary.push(newBook); // Add to array
    displayBook(newBook, myLibrary.length - 1); // Pass index to track the book
}

// Function to display a single book on the page
function displayBook(book, index) {
    const libraryContainer = document.getElementById('library-container');

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('data-index', index); // Set a unique identifier for each book

    bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.number_pages}</p>
        <p class="read-status"><strong>Status:</strong> ${book.read}</p>
    `;

    // Add "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function () {
        removeBookFromLibrary(index);
    });

    // Add "Change Read Status" button
    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = "Change Read Status";
    toggleReadButton.classList.add('toggle-read-button');
    toggleReadButton.addEventListener('click', function () {
        toggleReadStatus(index);
    });

    bookDiv.appendChild(removeButton);
    bookDiv.appendChild(toggleReadButton);
    libraryContainer.appendChild(bookDiv);
}

// Function to remove a book from the library and update the DOM
function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1); // Remove book from array
    updateLibraryDisplay(); // Re-render the library
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
    const book = myLibrary[index];
    book.read = book.read === "read" ? "not read yet" : "read"; // Toggle read status
    updateLibraryDisplay(); // Re-render the library to show the updated status
}

// Function to update the entire library display
function updateLibraryDisplay() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = ''; // Clear the container

    // Re-display all books with updated indexes
    myLibrary.forEach((book, index) => {
        displayBook(book, index);
    });
}

// Handle form submission
const form = document.getElementById('book-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const number_pages = parseInt(document.getElementById('number_pages').value, 10);
    const read = document.getElementById('read').value;

    // Validate inputs
    if (title && author && number_pages > 0) {
        // Add the new book to the library
        addBookToLibrary(title, author, number_pages, read);

        // Clear the form
        form.reset();
    } else {
        alert("Please fill out all fields correctly.");
    }
});

// Add initial books to the library (optional)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "read");
addBookToLibrary("1984", "George Orwell", 328, "not read yet");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "read");
