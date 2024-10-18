const API_URL = "https://gutendex.com/books";

export const fetchBooks = async (bookId = null, page = 1) => {
  try {
    let url = `${API_URL}?page=${page}`;
    if (bookId) {
      url = `${API_URL}?ids=${bookId}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`
      );
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error.message);
    throw error;
  }
};
