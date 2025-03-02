//Task 1: Creating a Class
class Book {  //class for the books in the library
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies; 
    }
    getDetails() {  //returning a formatted string for the book details.
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies Available: ${this.copies}`;
    }
    updateCopies(quantity) {  //this will modify the books available copies when a book is borrowed or returned
        this.copies += quantity;
    }
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails());  //Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 2: Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name; //This sources the name 
        this.borrowerID = borrowerId; //This sources the id 
        this.borrowedBooks = []; //An empty arraw for the borrow books
    }; //Borrowers the books from the system 

    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle);
    }; //Adds the borrowed books

    returnBook(bookTitle) {
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);
    }; //Removes the returned books from the borrow books 
};

// Test Cases for Task 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: []

//Task 3: Creating a Library Class
class Library {
    constructor () {
        this.books = []; //List all the books in the library
        this.borrower = []; //List all the borrowers
    };

    addbook(book) {
        this.book.push(book);
    }; //This will push a book to the library 

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }; //List all books in the library

    addBorrower(borrower) {
        this.borrower.push(borrower);
    }; //Add a borrower to the library
};