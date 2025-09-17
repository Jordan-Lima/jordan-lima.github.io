import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

export interface MixedChartProps {
  cursando: number[];
}

Chart.register(...registerables);

const StackedBarChart = ({ cursando }: MixedChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['UNIVESP'],
        datasets: [
          {
            label: 'Carga Cursando',
            data: cursando.length ? cursando : [10],
            backgroundColor: '#94ff9f',
            stack: 'Stack 0',
          },
          {
            label: 'Carga Total',
            data: [2400],
            backgroundColor: '#969696',
            stack: 'Stack 0',
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'BTI - UNIVESP' }
        },
        scales: {
          x: { stacked: false },
          y: { stacked: true}
        }
      }
    });

    return () => chart.destroy();
  }, [cursando]);

  return <canvas className="p-5 max-h-[15vw] max-w-[50vw]" ref={canvasRef}></canvas>;
};

export default StackedBarChart;
