import React from 'react';
import Navbar from './Navbar';
import BookList from './BookList';
import ThemeContextProvider from './context/ThemeContext';
function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
     <Navbar/>
     <BookList/>
     </ThemeContextProvider>
    </div>
  );
}

export default App;
