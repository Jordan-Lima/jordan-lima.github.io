'use client'
import { useEffect, useRef, useState } from "react";

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
    <>
      <div className="flex justify-center items-center text-4xl min-h-[720px] w-screen">
        {curriculoSlide === 0 && (
          <section className="h-full flex flex-col font-asimovian justify-center items-center max-w-[80vw]">
            <h3 className="font-bold font-asimovian">RESUMO PROFISSIONAL</h3>
            <p>Desenvolvedor Backend com foco em Java (Spring Boot) e experiência na criação de APIs robustas e escaláveis. Tenho vivência prática com JavaScript (React, Next.JS), bancos de dados MySQL e automação de processos. Conhecimento sólido em Docker, CI/CD e boas práticas de desenvolvimento para garantir performance e segurança.</p>
          </section>
        )}

        {curriculoSlide === 1 && (<section>
          <h3>EXPERIÊNCIA PROFISSIONAL</h3>
          <div className="experience-item">
            <h4>Comercial Villa Simpatia LTDA</h4>
            <p className="job-title">Desenvolvimento e Suporte de TI</p>
            <p className="dates">Julho 2022 - Presente</p>
            <ul>
              <li>Liderei o desenvolvimento e a implementação de APIs, aplicações web e desktop para otimizar processos internos.</li>
              <li>Atuei no desenvolvimento de bots e automações que aumentaram a eficiência operacional da equipe.</li>
              <li>Gerenciei servidores e bancos de dados (MySQL), garantindo a integridade e a disponibilidade dos dados da empresa.</li>
              <li>Prestei suporte especializado a sistemas internos, incluindo manutenção de software e hardware, o que me proporcionou um profundo entendimento das necessidades do usuário final.</li>
              <li><strong>Destaque:</strong> Desenvolvi uma ferramenta de multiatendimento para otimizar o tempo da equipe, melhorando a eficiência do atendimento e o tempo de resposta.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Prefeitura Municipal de Caçapava</h4>
            <p className="job-title">Estágio em TI</p>
            <p className="dates">Fevereiro 2022 - Agosto 2022</p>
            <ul>
              <li>Participei do desenvolvimento de sistemas e aplicações para a administração pública, visando a eficiência operacional e a melhoria contínua dos serviços.</li>
              <li>Colaborei na implementação de soluções para otimização de processos e na automação de tarefas.</li>
              <li>Adquiri experiência em gerenciamento de banco de dados, redes e servidores.</li>
              <li>Prestei suporte técnico a usuários internos, solucionando problemas em sistemas e na infraestrutura de TI.</li>
            </ul>
          </div>
        </section>)}

        {curriculoSlide === 2 && (
          <section>
            <h3>PROJETOS</h3>
            <div className="project-item">
              <h4>Drive Track CVS</h4>
              <p className="dates">Dezembro 2024 - Janeiro 2025</p>
              <p>Desenvolvi uma aplicação web para automatizar o registro de uso de veículos no departamento de TI, eliminando registros em papel.</p>
              <p><strong>Tecnologias utilizadas:</strong> Java (Spring Boot) para o backend, MySQL para banco de dados, React, TypeScript e TailwindCSS para o frontend.</p>
              <p><strong>Impacto:</strong> Reduziu erros de registro e aumentou a eficiência na gestão de uso dos veículos em 30%.</p>
            </div>
            <div className="project-item">
              <h4>SISMAC</h4>
              <p className="dates">Junho 2024</p>
              <p>Desenvolvi um sistema de cadastramento de endereços MAC para melhorar a administração da rede e controle de dispositivos autorizados.</p>
              <p><strong>Tecnologias utilizadas:</strong> Java (Spring Boot) para o backend, MySQL para banco de dados, React, TypeScript e TailwindCSS para o frontend.</p>
              <p><strong>Impacto:</strong> Otimizou o gerenciamento de dispositivos conectados, reduzindo falhas na segurança e aumentando a eficiência do controle de rede.</p>
            </div>
          </section>)}

        {curriculoSlide === 3 && (
          <section className="skills">
            <h3>HABILIDADES</h3>
            <h4>Soft Skills</h4>
            <p>Comunicação Assertiva | Trabalho em Equipe | Resolução de Problemas | Resiliência | Criatividade | Atenção aos Detalhes | Integridade | Gestão do Tempo</p>

            <h4>Hard Skills</h4>
            <ul>
              <li><strong>Backend:</strong> Java | Spring Boot | Python | Microsserviços e APIs REST</li>
              <li><strong>Frontend:</strong> JavaScript | TypeScript | React | Angular | Next.js | HTML | CSS</li>
              <li><strong>Bancos de Dados:</strong> MySQL / PL/SQL</li>
              <li><strong>DevOps & Ferramentas:</strong> Docker | CI/CD (GitHub Actions, Jenkins) | GIT / GitHub | Linux</li>
              <li><strong>IA & Machine Learning:</strong> LLMS (implementação e fine-tuning) | Machine Learning | NLP | Hugging Face</li>
              <li><strong>Outras Ferramentas:</strong> Windows | Anydesk | TOTVS Supermercado / PDV | Microsoft Office | Photoshop</li>
            </ul>
          </section>
        )}
        <div className="float-end flex flex-col gap-2 absolute right-10 top-1/2 transform -translate-y-1/2">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            onClick={() => setCurriculoSlide(index)}
            className={`h-4 w-4 rounded-full ${curriculoSlide === index ? 'bg-[#8a8a8a]' : 'bg-gray-300'}`}
          />
        ))}

        </div>

      </div>
    </>
  )
}

export default CurriculoProps