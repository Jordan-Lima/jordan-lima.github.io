'use client'

import { GithubRepo } from "@/script/interface"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

const Carrossel = () => {
  const [githubInfo, setGithubInfo] = useState<GithubRepo[]>([])
  const [count, setCount] = useState<number>(0)

  async function loadingApi() {
    try {
      const response = await fetch("https://api.github.com/users/jordan-lima/repos")
      const data = await response.json()
      setGithubInfo(data)
      setCount(0) // Reset count when new data is loaded
    } catch (e) {
      console.error("Erro ao buscar informações do github: ", e)
    }
  }

  const intervalId = useRef<NodeJS.Timeout | null>(null)

  const automaticSlide = () => {
    if (intervalId.current) clearInterval(intervalId.current)
    intervalId.current = setInterval(() => {
      handleClickNext()
    }, 2000)
  }

  const handleClickNext = () => {
    setCount(prev => (prev + 1) % githubInfo.length)
    automaticSlide()
  }

  const handleClickPrevious = () => {
    setCount(prev => (prev - 1 + githubInfo.length) % githubInfo.length)
    automaticSlide()
  }
  const accessGitProject = (url_git: string) => {
    window.open(url_git, "_blank")
  }

  useEffect(() => {
    loadingApi()
  }, [])

  automaticSlide()
  // Ensure count is always valid if githubInfo changes
  useEffect(() => {
    if (count >= githubInfo.length && githubInfo.length > 0) {
      setCount(0)
    }
  }, [githubInfo, count])

  return (
    <>
      <div className="sm:flex justify-center items-center w-full sm:mb-0 mb-5">
        {githubInfo.length > 0 && githubInfo[count] && (<div
          className="sm:flex sm:justify-center items-center gap-2 bg-amber-200 border-1 sm:h-[150px]"
        >
          <div
            className="flex justify-center sm:h-[150px] items-center px-[30px] bg-[#bbeaf0] border-y-1 border-r-1"
          >
            <Image
              src={githubInfo[count].owner?.avatar_url || "/img/logo.png"}
              width={130} height={130}
              className="w-[100px] sm:rounded-full sm:min-w-[130px] sm:h-[130px] my-2"
              alt="Avatar do Github"
            />
          </div>
          <div className="sm:py-auto py-5">
            <div className="flex flex-col w-full sm:h-full px-5">
              <h3 className="flex justify-center items-center font-bold">
                {githubInfo[count].full_name}
              </h3>
              <p className="flex justify-center items-center">
                {githubInfo[count].description}
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={handleClickPrevious}
                className="bg-[#f06b6b] border-1 p-2 rounded-full font-asimovian"
              >
                ↜ Anterior
              </button>
              <button
                onClick={() => accessGitProject(githubInfo[count].html_url)}
                className="bg-[#6ba5f0] border-1 p-2 rounded-full font-asimovian"
              >
                🤯 Acessar
              </button>
              <button
                onClick={handleClickNext}
                className="bg-[#86f06b] border-1 p-2 rounded-full font-asimovian"
              >
                Próximo ↝
              </button>
            </div>
          </div>
        </div>)}
      </div>
    </>
  )
}

export default Carrossel