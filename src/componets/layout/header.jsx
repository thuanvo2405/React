import "./header.css"
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li><Link className="active" to="#home">Home</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    );
}

export default Header;