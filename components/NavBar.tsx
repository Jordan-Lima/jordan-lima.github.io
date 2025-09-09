import Link from "next/link";
import Image from "next/image";


const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-amber-100">
      <div
        className="flex sm:w-[65px] w-[50px] h-8 justify-center items-center">
        <Image
          src="/img/logo.png" width={50} height={50} alt="logo da empresa" className="" />

      </div>
      <div className="flex justify-end gap-5 font-epunda-slab sm:text-[1.3em]">
        <Link href="/">Home</Link>
        <Link href="/curriculum">Curriculo</Link>
        <Link href="/univesp">Univesp</Link>
        <Link href="/about">Sobre</Link>
      </div>
    </nav>

  )
}

export default NavBar;