import { loadWishlist, toggleWishlist } from "./wishlist.js";

function displayWishlist() {
  const wishlistContainer = document.getElementById("wishlist-books");
  const wishlist = loadWishlist();

  wishlistContainer.innerHTML = `
    <div class="wishlist-container">
      <h1 class="wishlist-title">My Wishlist</h1>
      ${
        wishlist.length === 0
          ? '<p class="wishlist-empty">Your wishlist is empty.</p>'
          : `<div class="wishlist-grid">${wishlist
              .map(createBookCard)
              .join("")}</div>`
      }
    </div>
  `;

  // Add event listeners to wishlist buttons
  const wishlistBtns = wishlistContainer.querySelectorAll(".wishlist-btn");
  wishlistBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const bookId = e.target.dataset.id;
      const book = wishlist.find((b) => b.id === parseInt(bookId));
      toggleWishlist(book);
      displayWishlist();
    });
  });
}

function createBookCard(book) {
  const coverImage =
    book.formats["image/jpeg"] || "https://via.placeholder.com/300x400";
  const authors = book.authors.map((author) => author.name).join(", ");
  const genres = book.bookshelves.join(", ") || "N/A";

  return `
    <div class="wishlist-card">
      <img src="${coverImage}" alt="${book.title} cover">
      <div class="wishlist-card-content">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${authors}</p>
        <p><strong>Genre:</strong> ${genres}</p>
        <button class="wishlist-btn" data-id="${book.id}">❤️Remove from Wishlist</button>
      </div>
    </div>
  `;
}

displayWishlist();
