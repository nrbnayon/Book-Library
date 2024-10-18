import { fetchBooks } from "./api.js";
import { isInWishlist, toggleWishlist } from "./wishlist.js";

const showLoadingIndicator = () => {
  const detailsContainer = document.getElementById("book-details");
  detailsContainer.innerHTML = `
    <div class="loading-indicator">
      <div class="spinner"></div>
      <p>Loading book details...</p>
    </div>
  `;
};

const hideLoadingIndicator = () => {
  const loadingDiv = document.querySelector(".loading-indicator");
  if (loadingDiv) {
    loadingDiv.remove();
  }
};

async function displayBookDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get("id");

  if (!bookId) {
    document.getElementById("book-details").innerHTML =
      "<p>No book selected.</p>";
    return;
  }

  showLoadingIndicator();

  try {
    const response = await fetchBooks(bookId);
    const book = response.results.length > 0 ? response.results[0] : null;

    hideLoadingIndicator();

    if (!book) {
      document.getElementById("book-details").innerHTML =
        "<p>Book not found.</p>";
      return;
    }

    const detailsContainer = document.getElementById("book-details");
    const coverImage =
      book.formats["image/jpeg"] || "https://via.placeholder.com/300";
    const authors = book.authors.map((author) => author.name).join(", ");
    const genres = book.bookshelves.join(", ") || "N/A";

    detailsContainer.innerHTML = `
      <div class="book-detail-card">
        <img src="${coverImage}" alt="${book.title} cover">
        <div class="book-detail-info">
          <h2>${book.title}</h2>
          <p><strong>📚 Author(s):</strong> ${authors}</p>
          <p><strong>📖 Genre(s):</strong> ${genres}</p>
          <p><strong>🆔 ID:</strong> ${book.id}</p>
          <p><strong>⬇️ Download count:</strong> ${book.download_count}</p>
          <p><strong>🌐 Languages:</strong> ${book.languages.join(", ")}</p>
          <button id="wishlist-btn" class="wishlist-btn view-details-btn">
            ${
              isInWishlist(book.id)
                ? "❤️ Remove from Wishlist"
                : "🤍 Add to Wishlist"
            }
          </button>
        </div>
      </div>
    `;

    const wishlistBtn = document.getElementById("wishlist-btn");
    wishlistBtn.addEventListener("click", () => {
      toggleWishlist(book);
      wishlistBtn.textContent = isInWishlist(book.id)
        ? "❤️ Remove from Wishlist"
        : "🤍 Add to Wishlist";
    });
  } catch (error) {
    hideLoadingIndicator();
    console.error("Error fetching book details:", error);
    document.getElementById("book-details").innerHTML =
      "<p>Error loading book details. Please try again later.</p>";
  }
}

displayBookDetails();
