import React, { useState } from "react";
import './App.css';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';

const leftBooks = [
  {
    id: 1,
    title: "The Secret Garden",
    subtitle: "(NewYork Times Best Seller, #1)",
    author: "Frances Hodgson Burnett",
    image_link: "https://cdn.myportfolio.com/5652ecd87dc781415856ea832e4b8c7a/9979c836-202f-4ef2-9f72-43eeb3cba025_rw_1200.jpg?h=57956fc0383e7e38c3c4737f1d583f62"
  },
  {
    id: 2,
    title: "Dune",
    subtitle: "(Hugo Award For Best Novel, 1966)",
    author: "Frank Herbert",
    image_link:"https://m.media-amazon.com/images/I/81GgpMj8ImL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    subtitle: "(Grammy Award Nominee For Best Spoken Word Album, 2003)",
    author: "F.Scrott Fitzgerald",
    image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1MyY7pJzEaL8V0UE2y9J8Avl2afnItWU5g&s",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    subtitle: "",
    author: "Jane Austen",
    image_link: "https://omimages.s3.eu-west-1.amazonaws.com/covers/9780192789228.jpg",
  },
];

const rightBooks = [
  {
    id: 5,
    title: "Emma",
    subtitle: "",
    author: "Jane Austen",
    image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c2aqLT9_E28RvTcQfcfOhh_cCBIkE3gTbw&s",
  },
  {
    id: 6,
    title: "Fourth Wing",
    subtitle: "(British Book Award For Pageturner)",
    author: "Rebecca Yarros",
    image_link: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg",
  },
  {
    id: 7,
    title: "Before your memory fades",
    subtitle: "",
    author: "Toshikazu Kawaguchi",
    image_link: "https://bizweb.dktcdn.net/100/326/228/products/before-your-memory-fades-by-toshikazu-kawaguchi-bookworm-hanoi-a6a796a4-5c5f-4d08-859f-291fe9cd530a.jpg?v=1684988716557",
  },
  {
    id: 8,
    title: "Book lovers",
    subtitle: "",
    author: "Emily Henry",
    image_link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1638867089l/58690308.jpg",
  },
];

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
    <div>
      <Navigation
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <div style={styles.container}>
        <div style={styles.columnContainer}>
          {filteredLeftBooks.map((book) => (
            <HomeScreen
              key={book.id}
              title={book.title}
              subtitle={book.subtitle}
              author={book.author}
              image_link= {book.image_link}
            />
          ))}

        </div>
        <div style={styles.columnContainer}>
          {filteredRightBooks.map((book) => (
            <HomeScreen
              key={book.id}
              title={book.title}
              subtitle={book.subtitle}
              author={book.author}
              image_link={book.image_link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  columnContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },


}
export default App;