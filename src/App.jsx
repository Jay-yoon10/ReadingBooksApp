import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export default function App() {
  const [books, setBooks] = useState([]);

  //   const createBook = (bookTitle) => {
  //     setBooks((prev) => [...prev, bookTitle]);
  //   };
  const createBook = (title) => {
    setBooks((prev) => [
      ...prev,
      {
        id: Math.round(Math.random() * 99999),

        title,
      },
    ]);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
