import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "moby dick", id: 1 },
    { title: "kite runner", id: 2 },
    { title: "final empire", id: 3 },
    { title: "maze runner", id: 4 }
  ]);
  return <BookContext.Provider value={{books}}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
