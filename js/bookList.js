import { isInWishlist, toggleWishlist } from "./wishlist.js";

export const displayBooks = (books, container) => {
  container.innerHTML = "";
  books.forEach((book) => {
    const bookCard = createBookCard(book);
    container.appendChild(bookCard);
  });
};

const createBookCard = (book) => {
  const card = document.createElement("div");
  card.className = "book-card";

  const coverImage =
    book.formats["image/jpeg"] || "https://via.placeholder.com/150";
  const authors = book.authors.map((author) => author.name).join(", ");
  const genres = book.bookshelves.join(", ") || "N/A";

  card.innerHTML = `
    <div class="book-cover">
        <img src="${coverImage}" alt="${book.title} cover" loading="lazy">
    </div>
    <div class="book-details">
        <h3>📖 ${book.title} </h3>
        <p>👤 Author: ${authors} <strong>🆔:</strong> ${book.id}</p>
        <p>📚 Genre: ${genres}</p>
        <div class="book-actions">
            <button class="view-details-btn" data-id="${
              book.id
            }">📖 View Details</button>
            <button class="wishlist-btn" data-id="${book.id}">
                ${
                  isInWishlist(book.id)
                    ? "❤️ Remove Wishlist"
                    : "🤍 Add Wishlist"
                }
            </button>
        </div>
    </div>
  `;

  const viewDetailsBtn = card.querySelector(".view-details-btn");
  viewDetailsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = `pages/book-details.html?id=${book.id}`;
  });

  const wishlistBtn = card.querySelector(".wishlist-btn");
  wishlistBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleWishlist(book);
    wishlistBtn.textContent = isInWishlist(book.id)
      ? "❤️ Remove Wishlist"
      : "🤍 Add Wishlist";
  });

  return card;
};
