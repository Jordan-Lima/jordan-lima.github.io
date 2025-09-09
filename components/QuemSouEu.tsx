'use client'

import Image from "next/image";

const QuemSouEu = () => {

	return (
		<>
			<div className="flex flex-col gap-4 px-8 pb-8 p-2 max-w-3xl mx-auto font-pacifico justify-center items-center bg-[#7bd2fa] shadow-lg m-5">
				<Image 
					width={80} 
					height={80} 
					className="flex self-end w-5 z-1" src="https://cdn-icons-png.flaticon.com/512/889/889647.png" 
					alt="Imagem de uma tachinha" 
				/>

				<h1 className="flex text-3xl font-bold justify-center font-asimovian">
						Jordan Lima
				</h1>
				<p className="flex text-justify font-epunda-slab justify-center items-center ">
				Olá! Meu nome é Jordan Lima, sou apaixonado por tecnologia, programação e inovação.
				Tenho experiência prática em atendimento ao cliente, manutenção de hardware e software, acesso remoto, programação web, automação, desenvolvimento de bots, aplicações desktop, APIs e gerenciamento de servidores e bancos de dados.
				<br />
				Já implementei soluções que aumentaram a eficiência operacional, como uma ferramenta de multiatendimento que otimizou processos e reduziu tempo de resposta. Atualmente, estou desenvolvendo projetos em Java, Spring Boot, NodeJS, Python e MySQL, com foco em backend e automação de processos.
				<br />
				Além disso, tenho interesse em desenvolvimento frontend e estou sempre aprendendo novas tecnologias para entregar soluções modernas e completas.
				<br />
				Fora do mundo da tecnologia, gosto de música, arte e momentos descontraídos ao lado dos meus gatos, incluindo a famosa Sibirina 🐾.
				<br />
				Meu objetivo é unir conhecimento técnico e criatividade para construir projetos que gerem impacto real e ajudem pessoas e empresas a alcançarem seus resultados.
			</p>

			</div>
		</>
	)
}

export default QuemSouEu;