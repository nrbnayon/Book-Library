export function setupSearch(searchInput, books, displayCallback) {
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm)
    );
    displayCallback(filteredBooks);
  });
}
