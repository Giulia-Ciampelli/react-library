export default function Home() {
    return (
        <>
            <header>
                <div className="logo">
                    logo
                </div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contacts">Contacts</a>
                </nav>
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