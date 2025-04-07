import React, { useEffect, useState } from "react";
import { getBooks, addBook, deleteBook } from "../services/bookService";

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleAddBook = async () => {
    if (!title) return;
    await addBook({ title });
    setTitle("");
    fetchBooks();
  };

  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  return (
    <div>
      <h2>Book Management</h2>
      <input type="text" placeholder="Enter Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddBook}>Add Book</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookManagement;
