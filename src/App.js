import React from 'react';
import './App.css';
import logo from './assets/Cat.dancing.png';
import ic_bell from './assets/ic_bell.svg';
import ic_mailbox from './assets/ic_mailbox.svg';
import ic_user from './assets/ic_user.svg';
import ic_chat from './assets/ic_chat.svg';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';

const leftBooks = [
  {
    id: 1,
    title: "Secret Garden",
    subtitle: "(NewYork Times Best Seller, #1)",
  },
  {
    id: 2,
    title: "Dune",
    subtitle: "",
  },
  {
    id: 3,
    title: "Book 3",
    subtitle: "",
  },
  {
    id: 4,
    title: "Book 4",
    subtitle: "",
  },
];

const rightBooks = [
  {
    id: 5,
    title: "Book 5",
    subtitle: "",
  },
  {
    id: 6,
    title: "Book 6",
    subtitle: "",
  },
  {
    id: 7,
    title: "Book 7",
    subtitle: "",
  },
  {
    id: 8,
    title: "Book 8",
    subtitle: "",
  },
];

function App() {
  return (
    <div>
      <Navigation />

      <div style={styles.container}>
        <div style={styles.columnContainer}>
          {leftBooks.map((book) => (
            <HomeScreen
              key={book.id}
              title={book.title}
              subtitle={book.subtitle}
            />
          ))}
        </div>
        <div style={styles.columnContainer}>
          {rightBooks.map((book) => (
            <HomeScreen
              key={book.id}
              title={book.title}
              subtitle={book.subtitle}
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