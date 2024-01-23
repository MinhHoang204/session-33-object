class Sach {
    constructor(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
    }
  
    displayInfo() {
      console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPublished Year: ${this.publishedYear}`);
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
}