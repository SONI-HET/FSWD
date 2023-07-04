function displayBooks(books) {
    var booksContainer = document.getElementById("bookId");
    booksContainer.innerHTML = "";

    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      var bookElement = document.createElement("p");
      bookElement.textContent = book;
      booksContainer.appendChild(bookElement);
    }
  }