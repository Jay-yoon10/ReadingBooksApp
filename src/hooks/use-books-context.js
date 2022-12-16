import { useContext } from 'react';
import BooksContext from '../context/booksContext';
export const useBooksContext = () => {
  return useContext(BooksContext);
};
