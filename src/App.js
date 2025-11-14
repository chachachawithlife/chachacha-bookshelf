import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import BookDetailScreen from "./screens/BookDetailScreen";
import { leftBooks, rightBooks } from "./data/books";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const lowercasedSearch = searchTerm.toLowerCase();

  const filteredLeftBooks = leftBooks.filter((book) =>
    book.title.toLowerCase().includes(lowercasedSearch)
  );

  const filteredRightBooks = rightBooks.filter((book) =>
    book.title.toLowerCase().includes(lowercasedSearch)
  );

  return (
    <Router>
      <Navigation
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              booksLeft={filteredLeftBooks}
              booksRight={filteredRightBooks}
            />
          }
        />
        <Route path="/book/:id" element={<BookDetailScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
