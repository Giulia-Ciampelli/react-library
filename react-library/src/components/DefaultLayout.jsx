import MainMenu from "./MainMenu";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>
                <MainMenu />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                &copy; {new Date().getFullYear()}
            </footer>
        </>
    )
}