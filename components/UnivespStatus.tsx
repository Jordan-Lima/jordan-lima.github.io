"use client";

import { UnivespJSON } from "@/script/interface";
import { useEffect, useState } from "react";
import MixedChart from "./ChartUnivesp";

const UnivespStatus = () => {
  const [disciplinas, setDisciplinas] = useState<UnivespJSON>({ disciplinas: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("/univespData.json"); // JSON gerado pelo Bun/Playwright
        if (!res.ok) throw new Error("Falha ao carregar o JSON");
        const data: UnivespJSON = await res.json();
        setDisciplinas(data);
      } catch (err) {
        console.error(err);
        console.error(
          "Erro ao carregar as disciplinas. Por favor, tente novamente mais tarde."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <main>
        <div className="flex flex-col justify-center items-center w-full my-[2rem]">
          <h1 className="p-5 text-3xl font-bold m-5">
            Status das Disciplinas - UNIVESP
          </h1>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          {isLoading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ul className="max-w-xl bg-white shadow-md rounded-lg p-4 flex flex-col gap-3">
              {disciplinas.disciplinas.map((disciplina, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                >
                  <p className="max-w-[250px] font-medium text-gray-800">{disciplina.nome}</p>
                  <p className="text-gray-600">{disciplina.carga}</p>
                  <p
                    className={`font-semibold ${
                      disciplina.status.toLowerCase() === "cursando"
                        ? "text-blue-500"
                        : disciplina.status.toLowerCase() === "concluída"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {disciplina.status}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <MixedChart cursando={[
            disciplinas.disciplinas.reduce((total, disciplina) => {
            const cargaNum = parseInt(disciplina.carga.replace(/\D/g, ''), 10);
            return total + (isNaN(cargaNum) ? 0 : cargaNum);
          }, 0)
        ]}
        />

          </div>
        </div>
      </main>
    </div>
  );
};

export default UnivespStatus;
