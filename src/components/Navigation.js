import logo from '../assets/Cat.dancing.png';
import ic_bell from '../assets/ic_bell.svg';
import ic_mailbox from '../assets/ic_mailbox.svg';
import ic_user from '../assets/ic_user.svg';
import ic_chat from '../assets/ic_chat.svg';
import ic_favor from '../assets/ic_favor.png';
import ic_add from '../assets/ic_add.png';
import { useNavigate } from "react-router-dom";
import "./Navigation.css";


export default function Navigation({ searchTerm, onSearchChange }) {
    const navigate = useNavigate();
    return (
        <div style={styles.container}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
            <header>
                <div style={styles.navContainer}>
                    <div style={styles.navIconContainer}>
                        <img src={logo} alt="logo" width={191} height={140} />
                        <p style={styles.navHeader}>chachachawithlife</p>
                    </div>
                    <a className="nav-item" href='#' style={styles.navItem} >
                        HOME
                    </a>
                    <a className="nav-item" href="#" style={styles.navItem} onClick={() => navigate("/")}>
                        MY BOOKS
                    </a>
                    <a className="nav-item" href="#" style={styles.navItem}>
                        DISCOVER
                    </a>
                    <a className="nav-item" href='#' style={styles.navItem}>
                        BROWSER
                        <div style={styles.dropdown}>

                        </div>
                    </a>
                    <a className="nav-item" href='#' style={styles.navItem}>
                        COMUNITY
                    </a>
                    <input
                        placeholder="Search here"
                        style={styles.navSearch}
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />

                    <img style={styles.navIcon} width={36} height={36} src={ic_add}>
                    </img>
                    <img style={styles.navIcon} width={36} height={36} src={ic_favor}>
                    </img>
                    <img style={styles.navIcon} width={36} height={36} src={ic_user}>
                    </img>
                    <img style={styles.navIcon} width={36} height={36} src={ic_chat}>
                    </img>




                </div>
            </header>
        </div>
    );
}
const styles = {
    dropdown: {

    },
    container: {
        backgroundColor: "#d3571aff",

    },
    navContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
        flex: 1,
        border: "#59793170 solid 2px",
        backgroundColor: "#f8e2afff",

    },
    navItem: {
        color: "#3f2e19",
        paddingRight: 25,
        fontSize: 13,
        fontFamily: "Montserrat",
        textDecoration: "none",
        position: "relative"
    },
    tableRow: {
        border: "1px solid green",
    },

    navHeader: {
        fontWeight: "",
        fontFamily: "Dancing Script",
        color: "#3f2e1",
        fontSize: 18,
        marginTop: 0,

        transform: "translateY(-15px)"
    },
    navIconContainer: {
        textAlign: "center",
    },
    navSearch: {
        backgroundColor: "#f9f4ecff",
        width: "20%",
        height: 32,
        border: "#79593170 1px solid",
        borderRadius: 3,
        paddingLeft: 8,
    },
    navIcon: {
        backgroundColor: "#79593170",
        borderRadius: "50%",
        marginHorizontal: 20,
        marginLeft: 25,
        padding: 4,

    }
}