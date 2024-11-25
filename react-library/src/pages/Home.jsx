import MainMenu from "../components/MainMenu";

export default function Home() {
    return (
        <>
            <MainMenu />
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