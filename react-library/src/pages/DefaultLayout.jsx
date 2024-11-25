import MainMenu from "../components/MainMenu";
import { Outlet } from "react-router-dom";

// componenti
import Header from "../components/Header";
import Footer from "../components/footer";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}