import MainMenu from "../components/MainMenu";

export default function Home() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>
                <MainMenu />
            </header>
            <main>
                <h1>
                    Home page
                </h1>
            </main>
            <footer>
                &copy; {new Date().getFullYear()}
            </footer>
        </>
    )
}