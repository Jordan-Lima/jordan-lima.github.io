import Desenvolvedor from "@/components/Desenvolvedor";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <header>
        <NavBar />
      </header>
      <main>
        <Desenvolvedor />
      </main>
    </div>
  );
}
