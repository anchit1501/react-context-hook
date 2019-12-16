import React from 'react';
import Navbar from './Navbar';
import BookList from './BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './ThemeToggle';
function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
     <Navbar/>
     <BookList/>
     <ThemeToggle/>
     </ThemeContextProvider>
    </div>
  );
}

export default App;
