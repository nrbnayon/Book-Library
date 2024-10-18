const WISHLIST_KEY = "bookWishlist";

export function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  return wishlist;
}

export function saveWishlist(wishlist) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function isInWishlist(bookId) {
  const wishlist = loadWishlist();
  return wishlist.some((book) => book.id === bookId);
}

export function toggleWishlist(book) {
  const wishlist = loadWishlist();
  const index = wishlist.findIndex((item) => item.id === book.id);

  if (index === -1) {
    wishlist.push(book);
  } else {
    wishlist.splice(index, 1);
  }

  saveWishlist(wishlist);
}
