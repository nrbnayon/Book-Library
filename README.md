
# Book Library

Book Library is a web application that allows users to browse, search, and filter a collection of books fetched from the public Gutenberg Books API. Users can view book details, add books to a wishlist, and navigate through paginated lists of books. The app provides a user-friendly interface with responsive design to ensure a smooth experience across devices.

## Features

- **Home Page**: Displays a list of books with details including title, author, cover image, genre, and ID.
- **Search Bar**: Real-time filtering of books based on the title.
- **Genre Filter**: Dropdown to filter books by genre/topic.
- **Wishlist**: Users can add or remove books to/from their wishlist. Wishlisted books are marked with a heart icon and stored in local storage.
- **Pagination**: Paginate through the list of books using "Next" and "Previous" buttons or page numbers.
- **Book Details Page**: Displays detailed information about a selected book.
- **Responsive Design**: Fully responsive layout for both desktop and mobile devices.
- **Optional Bonus**:
  - Smooth animations for showing or hiding books.
  - Persistent search and filter preferences using localStorage.

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML, CSS
- **Styling**: CSS (preferably Vanilla CSS), Bootstrap or Tailwind CSS (optional)
- **API**: [Gutenberg Books API](https://gutendex.com/)
- **Data Storage**: localStorage for wishlist and user preferences

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nrbnayon/Book-Library.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Book-Library
   ```
3. **Open `index.html` in your web browser** to start the application.

## Usage

1. **Homepage**: View the list of books. Use the search bar to filter by title or the dropdown to filter by genre.
2. **Wishlist**: Click the heart icon to add or remove a book from the wishlist. The wishlist is accessible through the navigation bar.
3. **Pagination**: Navigate through the list of books using pagination controls.
4. **Book Details Page**: Click on a book title to view more detailed information.

## API Documentation

This project uses the Gutenberg Books API to fetch data about books. For more information, visit the [API Documentation](https://gutendex.com/).

## Code Explanation

### 1. `index.html`
   - The main landing page that displays a list of books.
   - Includes a search bar, genre filter dropdown, and pagination controls.

### 2. `book-details.html`
   - Displays detailed information about a selected book.
   - Includes an option to add or remove the book from the wishlist.

### 3. `wishlist.html`
   - Displays a list of books added to the wishlist.

### 4. `js/main.js`
   - Handles fetching the book data and rendering the list of books.
   - Implements the search and filter functionalities.

### 5. `js/book-details.js`
   - Fetches and displays the details of a specific book based on the book ID from the URL.
   - Handles wishlist toggling for individual books.

### 6. `js/wishlist.js`
   - Manages the wishlist, including adding/removing books and storing the wishlist in localStorage.

### 7. `js/api.js`
   - Contains functions to interact with the Gutenberg Books API.
   - Fetches books based on search criteria or specific IDs.

### 8. `js/pagination.js`
   - Handles pagination logic to navigate through pages of books.

## Styling

- The application uses basic HTML and CSS for structure and styling.
- Optionally, you can use Bootstrap or Tailwind CSS for additional styling.
- The layout is responsive to ensure compatibility with both desktop and mobile devices.

## Local Development

To run the project locally:
1. Ensure you have a local web server set up (such as [Live Server for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).
2. Open the project folder in your preferred code editor.
3. Run the local server to view the changes in real time.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Gutenberg Books API](https://gutendex.com/) for providing the public book data.
- [Font Awesome](https://fontawesome.com/) for the wishlist icons.
- [Unsplash](https://unsplash.com/) for placeholder images.
  
---

Happy coding!
