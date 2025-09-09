import NavBar from "@/components/NavBar"
import Carrossel from "@/components/Carrossel"
import QuemSouEu from "@/components/QuemSouEu"

const Sobre = () => {
    return(
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <QuemSouEu />
        </main>
        <footer>
            <Carrossel />
        </footer>
    </>
    )
}

export default Sobre;