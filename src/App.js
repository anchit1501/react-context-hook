import React from "react";
import Navbar from "./Navbar";
import BookList from "./BookList";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
          <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
