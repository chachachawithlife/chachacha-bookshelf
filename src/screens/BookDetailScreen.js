import { useParams } from "react-router-dom";
import { allBooks } from "../data/books";

export default function BookDetailScreen() {
  const { id } = useParams();

  const bookId = parseInt(id, 10);
  const book = allBooks.find((b) => b.id === bookId);

  if (!book) return <h2 style={{ padding: 40 }}>Book not found</h2>;

  return (
    <div style={styles.container}>
      <img src={book.image_link} style={styles.image} alt={book.title} />

      <div style={styles.infoContainer}>
        <h1 style={styles.title}>{book.title}</h1>
        {book.subtitle && <h3>{book.subtitle}</h3>}
        <p>
          <b>Author:</b> {book.author}
        </p>
        {book.description && (
          <p style={{ marginTop: 20 }}>{book.description}</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: 40,
    gap: 40,
    alignItems: "flex-start",
  },
  image: {
    width: 350,
    height: "auto",
    borderRadius: 10,
    objectFit: "cover",
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    color: "#795931",
  },
};
