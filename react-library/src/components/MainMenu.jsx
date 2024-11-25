import { Link, NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav>
            {/* come evitare di ricaricare la pagina ogni volta? con navlink, link invece fa ricaricare tutto */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    )
}