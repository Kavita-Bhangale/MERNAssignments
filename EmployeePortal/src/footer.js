import { useContext } from "react"
import './Address.css';
import { ThemeContext } from "./ThemeContext";

export const Footer = () => {
    const value = useContext(ThemeContext);
    return (

        <footer className={value.theme}>
            <a href="">Privacy Policy</a>
        </footer>
    )
}