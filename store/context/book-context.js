import {createContext, useState} from 'react';

export const BooksContext = createContext({
  books: [],
  getAllBook: () => {},
});

function BooksContextProvider({children}) {
  const [books, setBooks] = useState([]);

  function getAllBook(todos) {
    setBooks(todos)
  }
  const value = {
    books: books,
    getAllBook: getAllBook,
  };
  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export default BooksContextProvider;
