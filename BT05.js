class Sach {
    constructor(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
      this.isAvailable = true;
    }
  
    displayInfo() {
      console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPublished Year: ${this.publishedYear}\nIs Available: ${this.isAvailable}`);
    }
  
    borrow() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`The book "${this.title}" has been borrowed.`);
      } else {
        console.log(`The book "${this.title}" is not available for borrowing.`);
      }
    }
  
    returnBook() {
      if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`The book "${this.title}" has been returned.`);
      } else {
        console.log(`The book "${this.title}" has already been returned.`);
      }
    }
}

class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    displayBooks() {
      for (let i = 0; i < this.books.length; i++) {
        console.log(`Book ${i + 1}:`);
        this.books[i].displayInfo();
        console.log();
      }
    }
  
    isBookAvailable(title) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].title === title) {
          return this.books[i].isAvailable;
        }
      }
      console.log(`The book "${title}" is not in the library.`);
      return false;
    }
}