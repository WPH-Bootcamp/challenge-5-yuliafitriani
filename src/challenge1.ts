let book: {
  title: string;
  author: string;
  year: number;
};

let books: (typeof book)[] = [];

function addBook(title: string, author: string, year: number): void {
  book = {
    title: title,
    author: author,
    year: year,
  };

  books.push(book);

  console.log(`Book added: "${title}" by ${author} (${year})`);
}

function listBooks() {
  if (books.length > 0) {
    console.log("All Books:");

    books.forEach((book) => {
      console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
  }

  console.log("No data book to display.");
}

function searchBook(title?: string) {
  if (title) {
    console.log(`Search Results for "${title}":`);

    const foundBooks = books.filter((book) => book.title.includes(title));

    if (foundBooks.length > 0) {
      foundBooks.forEach((value) =>
        console.log(`- ${value.title} by ${value.author} (${value.year})`)
      );
    } else {
      console.log(`No books found with title containing "${title}".`);
    }
  } else {
    console.log("Please provide a title to search.");
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
