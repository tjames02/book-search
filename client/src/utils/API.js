import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + encodeURI(q) + "&key=AIzaSyCLmV5L0T3kODLJ6fMQoStKcJEKPJJ2TZo" );
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

