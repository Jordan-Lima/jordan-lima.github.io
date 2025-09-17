'use client'

const Desenvolvedor = () => {
  return(
    <>
      <div className="flex flex-col justify-center items-center min-h-[100vh] text-[#221b1b] px-4 gap-5 bg-[#76daf8]">
        <p className="flex text-[75px] max-w-[60vw] font-merriweather">
          Criando soluções digitais inovadoras para transformar ideias em realidade.
        </p>
        <button onClick={() => window.location.href = "https://www.linkedin.com/in/jordanlimadev/"} className="cursor-pointer rounded-full px-5 py-2 text-2xl text-[#f0d] bg-[#fff] hover:bg-[#fff]/80 hover:text-[#f0d]/80">Vamos lá...</button>
      </div>
    </>
  )
}

export default Desenvolvedor