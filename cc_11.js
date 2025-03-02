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
class Library { // creates library class
    constructor(books, borrowers) { // creates arrays 
        this.books = []; // links to the  books array
        this.borrowers = []; // links to the  borrowers array
    };
    addBook(book) {
        this.books.push(book) // adds book into array
    };
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }; // finds each book in the array and logs the details

    addBorrower(borrower){ // adds a borrower to the array
        this.borrowers.push(borrower);
    }
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);

        if (book && borrower && book.copies > 0) { // checks different conditions to lend book
            book.updateCopies(-1); // removes 1 if book is borrowed
            borrower.borrowBook(book.title);        
        } else {
            console.log("Cannot lend book.")
        }
    }
    
    returnBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
        if (book && borrower) { // checks conditions to see if book can be return
            book.updateCopies(1); // adds 1 if book is returned
            borrower.returnBook(book.title);
        }
    }
}
//Test Cases for Task 3
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 4: Implementing Book Borrowing
library.lendBook(201, 123456);
console.log(book1.getDetails()); //Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks); //Expected output: ["The Great Gatsby"]

//Task 5: Implementing Book Returns 

//Test Cases
library.returnBook(201, 123456); // returns book
console.log(book1.getDetails()); // logs book details
console.log(borrower1.borrowedBooks); 