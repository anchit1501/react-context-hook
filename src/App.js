import React from "react";
import Navbar from "./Navbar";
import BookList from "./BookList";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
