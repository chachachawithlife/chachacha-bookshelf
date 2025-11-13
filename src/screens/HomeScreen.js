import book1 from "../assets/book1.jpeg";


export default function HomeScreen({title,subtitle, author, image_link}) {
    return (
        <div style={styles.container}>
            <img style={styles.itemImg} src={image_link}/>
            <div>
                <p style={styles.itemTitle}>{title}
                    <span style={styles.itemNote}> {subtitle}</span>
                    </p>
                <p style={styles.itemDescription}> {author} </p>

            </div>

        </div>

    );
}

const styles = {
    itemImg: {
        width: 90,
        height: 120,
        backgroundColor: "black",
        marginRight: 20,

    },
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        border: " 1px solid #795931",
        width: 500,
        margin: 40,

    },

    itemTitle: {
        color: "#795931",
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "bold",
        paddingRight: 5,
        

    },
    itemNote: {
        color: "black",
        fontFamily: "Montserrat",
        fontSize: 16,
        fontStyle: "italic"

    },
    itemDescription: {
        fontStyle: "italic",
        fontSize: 14,
        fontFamily: "Montserrat",
        margin: 0,
        padding: 0,


    }


}