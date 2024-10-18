export function setupFilter(filterSelect, books, displayCallback) {
  const genres = new Set();
  books.forEach((book) => {
    book.bookshelves.forEach((genre) => genres.add(genre));
  });

  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    filterSelect.appendChild(option);
  });

  filterSelect.addEventListener("change", () => {
    const selectedGenre = filterSelect.value;
    const filteredBooks = selectedGenre
      ? books.filter((book) => book.bookshelves.includes(selectedGenre))
      : books;
    displayCallback(filteredBooks);
  });
}
