import { fetchBooks } from "./api.js";
import { displayBooks } from "./bookList.js";
import { setupSearch } from "./search.js";
import { setupFilter } from "./filter.js";
import { setupPagination } from "./pagination.js";
import { loadWishlist } from "./wishlist.js";

const BOOKS_PER_PAGE = 9;

const showLoadingIndicator = () => {
  const loadingDiv = document.createElement("div");
  loadingDiv.id = "loading-indicator";
  loadingDiv.innerHTML = '<div class="spinner"></div><p>Loading books...</p>';
  document.body.appendChild(loadingDiv);
};

const hideLoadingIndicator = () => {
  const loadingDiv = document.getElementById("loading-indicator");
  if (loadingDiv) {
    loadingDiv.remove();
  }
};

// Main Initialization Function
const init = async () => {
  const bookContainer = document.getElementById("book-container");
  const paginationControls = document.getElementById("pagination-controls");
  const searchBar = document.getElementById("search-bar");
  const genreFilter = document.getElementById("genre-filter");

  showLoadingIndicator();
  let currentPage = 1;
  let books = [];

  try {
    const response = await fetchBooks();
    if (!response || !response.results) {
      throw new Error("Invalid response format");
    }
    books = response.results;

    displayBooks(books.slice(0, BOOKS_PER_PAGE), bookContainer);
    setupPagination(
      response.count,
      BOOKS_PER_PAGE,
      currentPage,
      paginationControls,
      (page) => {
        currentPage = page;
        const start = (page - 1) * BOOKS_PER_PAGE;
        const end = start + BOOKS_PER_PAGE;
        displayBooks(books.slice(start, end), bookContainer);
      }
    );

    setupSearch(searchBar, books, (filteredBooks) =>
      displayBooks(filteredBooks, bookContainer)
    );

    setupFilter(genreFilter, books, (filteredBooks) =>
      displayBooks(filteredBooks, bookContainer)
    );
    loadWishlist();
  } catch (error) {
    console.error("Error initializing app:", error);
    bookContainer.innerHTML =
      "<p>Error loading books. Please try again later.</p>";
  } finally {
    hideLoadingIndicator();
  }
};
init();
