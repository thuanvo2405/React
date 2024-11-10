import "./header.css"
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/book">Book</NavLink></li>
        </ul>
    );
}

export default Header;