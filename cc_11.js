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