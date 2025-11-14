import HomeScreen from "./HomeScreen";
import { useNavigate } from "react-router-dom";

export default function HomePage({ booksLeft, booksRight }) {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.columnContainer}>
                {booksLeft.map((book) => (
                    <HomeScreen
                        key={book.id}
                        title={book.title}
                        subtitle={book.subtitle}
                        author={book.author}
                        image_link={book.image_link}
                        onClick={() => navigate(`/book/${book.id}`)}
                    />
                ))}
            </div>

            <div style={styles.columnContainer}>
                {booksRight.map((book) => (
                    <HomeScreen
                        key={book.id}
                        title={book.title}
                        subtitle={book.subtitle}
                        author={book.author}
                        image_link={book.image_link}
                        onClick={() => navigate(`/book/${book.id}`)}
                    />
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    columnContainer: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
};
