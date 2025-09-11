'use client'
import { useEffect, useState } from "react";

const CurriculoProps = () => {
  const [curriculoSlide, setCurriculoSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurriculoSlide((prev) => (prev === 3 ? 0 : prev + 1))
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div className="relative flex justify-center items-center min-h-[80vh] w-full bg-gray-50 px-4 py-2">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl">

        {/* Conteúdo do slide */}
        <div className="w-full bg-white shadow-lg rounded-xl p-8 sm:p-12 transition-all duration-500 ease-in-out">
          {curriculoSlide === 0 && (
            <section className="flex flex-col gap-4 text-center">
              <h3 className="text-3xl font-bold font-epunda-slab text-gray-800">RESUMO PROFISSIONAL</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Desenvolvedor Backend com foco em Java (Spring Boot) e experiência na criação de APIs robustas e escaláveis. Tenho vivência prática com JavaScript (React, Next.JS), bancos de dados MySQL e automação de processos. Conhecimento sólido em Docker, CI/CD e boas práticas de desenvolvimento para garantir performance e segurança.
              </p>
            </section>
          )}

          {curriculoSlide === 1 && (
            <section className="flex flex-col gap-8">
              <h3 className="text-3xl font-bold font-epunda-slab text-gray-800 text-center mb-4">EXPERIÊNCIA PROFISSIONAL</h3>
              
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="p-6 border-l-4 border-indigo-500 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold font-epunda-slab text-gray-900">Comercial Villa Simpatia LTDA</h4>
                  <p className="text-indigo-600 font-medium">Desenvolvimento e Suporte de TI</p>
                  <p className="text-gray-500 text-sm">Julho 2022 - Presente</p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>Liderei o desenvolvimento e a implementação de APIs, aplicações web e desktop para otimizar processos internos.</li>
                    <li>Atuei no desenvolvimento de bots e automações que aumentaram a eficiência operacional da equipe.</li>
                    <li>Gerenciei servidores e bancos de dados (MySQL), garantindo integridade e disponibilidade dos dados.</li>
                    <li>Prestei suporte especializado a sistemas internos, incluindo manutenção de software e hardware.</li>
                    <li><strong>Destaque:</strong> Desenvolvi uma ferramenta de multiatendimento para otimizar o tempo da equipe.</li>
                  </ul>
                </div>

                <div className="p-6 border-l-4 border-indigo-500 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold font-epunda-slab text-gray-900">Prefeitura Municipal de Caçapava</h4>
                  <p className="text-indigo-600 font-medium">Estágio em TI</p>
                  <p className="text-gray-500 text-sm">Fevereiro 2022 - Agosto 2022</p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>Participei do desenvolvimento de sistemas e aplicações para a administração pública.</li>
                    <li>Colaborei na implementação de soluções para otimização de processos e automação de tarefas.</li>
                    <li>Adquiri experiência em gerenciamento de banco de dados, redes e servidores.</li>
                    <li>Prestei suporte técnico a usuários internos, solucionando problemas em sistemas e infraestrutura.</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {curriculoSlide === 2 && (
            <section className="flex flex-col gap-6">
              <h3 className="text-3xl font-bold font-epunda-slab text-gray-800 text-center">PROJETOS</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold font-epunda-slab text-gray-900">Drive Track CVS</h4>
                  <p className="text-gray-500 text-sm">Dezembro 2024 - Janeiro 2025</p>
                  <p className="mt-2 text-gray-700">Automação do registro de uso de veículos no departamento de TI, eliminando registros em papel.</p>
                  <p className="mt-1 text-gray-700"><strong>Tecnologias:</strong> Java, MySQL, React, TypeScript, TailwindCSS</p>
                  <p className="mt-1 text-gray-700"><strong>Impacto:</strong> Reduziu erros de registro e aumentou a eficiência em 30%.</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold font-epunda-slab text-gray-900">SISMAC</h4>
                  <p className="text-gray-500 text-sm">Junho 2024</p>
                  <p className="mt-2 text-gray-700">Sistema de cadastramento de endereços MAC para melhorar a administração da rede e controle de dispositivos.</p>
                  <p className="mt-1 text-gray-700"><strong>Tecnologias:</strong> Java, MySQL, React, TypeScript, TailwindCSS</p>
                  <p className="mt-1 text-gray-700"><strong>Impacto:</strong> Reduziu falhas de segurança e aumentou a eficiência do controle de rede.</p>
                </div>
              </div>
            </section>
          )}

          {curriculoSlide === 3 && (
            <section className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold font-epunda-slab text-gray-800 text-center">HABILIDADES</h3>

              <div className="flex sm:flex-row gap-8 mt-4 ">
                <div className="flex flex-col gap-6">
                  <div className="">
                    <h4 className="font-bold font-epunda-slab text-indigo-600">Soft Skills</h4>
                    <p className="text-gray-700 mt-1">Comunicação Assertiva | Trabalho em Equipe | Resolução de Problemas | Resiliência | Criatividade | Atenção aos Detalhes | Integridade | Gestão do Tempo</p>
                  </div>

                  <div className="">
                    <h4 className="font-bold font-epunda-slab text-indigo-600">Hard Skills</h4>
                    <ul className="list-disc list-inside mt-1 text-gray-700 space-y-1">
                      <li>Backend: Java | Spring Boot | Python | Microsserviços e APIs REST</li>
                      <li>Frontend: JavaScript | TypeScript | React | Angular | Next.js | HTML | CSS</li>
                      <li>Bancos de Dados: MySQL / PL/SQL</li>
                      <li>DevOps & Ferramentas: Docker | CI/CD | Git | Linux</li>
                      <li>IA & Machine Learning: LLMS | Machine Learning | NLP | Hugging Face</li>
                      <li>Outras Ferramentas: Windows | Anydesk | TOTVS | Microsoft Office | Photoshop</li>
                    </ul>
                  </div>

                </div>
              </div>
            </section>
          )}
        </div>

        {/* Botões de navegação */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => setCurriculoSlide(index)}
              className={`h-4 w-4 rounded-full transition-colors duration-300 ${curriculoSlide === index ? 'bg-indigo-600' : 'bg-gray-300'} hover:bg-indigo-400`}
              aria-label={`Slide ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CurriculoProps