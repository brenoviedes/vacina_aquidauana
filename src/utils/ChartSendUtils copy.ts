import { ChartConfiguration } from "chart.js";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import { writeFileSync } from "fs";
import { join } from "path";

import VacsSendResumeType from "../models/types/VacsSendResumeType";



export const getSendChart = (VacSended: VacsSendResumeType[]) => {

    const labels: string[] = []
    const qtdPfizer: number[] = []
    const qtdOxfordFiocruz: number[] = []
    const qtdJanssen: number[] = []
    const qtdCoronavacButantan: number[] = []

    VacSended.forEach(item => {
        labels.push(item.period)
        qtdPfizer.push(item.qtdPfizer)
        qtdOxfordFiocruz.push(item.qtdOxfordFiocruz)
        qtdJanssen.push(item.qtdJanssen)
        qtdCoronavacButantan.push(item.qtdCoronavacButantan)
    })

    // console.log(labels, qtdPfizer, qtdOxfordFiocruz, qtdJanssen, qtdCoronavacButantan)

    const data = {
        labels: labels,
        dataset: [
            {
                label: 'Pfizer',
                data: qtdPfizer,
                borderColer: 'rgb(0,0,255)',
                backgroundColot: 'rgba(0,0,255,0.5',
                yAxisID: 'y'
            },
            {
                label: 'janssen',
                data: qtdJanssen,
                borderColer: 'rgb(0,255,0)',
                backgroundColot: 'rgba(0,255,0,0.5)',
                yAxisID: 'y'
            }
        ]
    }

    return data
}

export const CreateSendedChart = (VacSended: VacsSendResumeType[]) => {

    const data = getSendChart(VacSended)

    const chart = new ChartJSNodeCanvas({
        width: 1366,
        height: 768,
        backgroundColour: '#fff'
    })

    const configChart: ChartConfiguration = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Doses enviadas para Aquidauana por mês e por tipo de vacina'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            }
        }
    }

    const ChartMultipleLine = chart.renderToBufferSync(configChart)
    const path = join(__dirname, '..', 'charts', 'doses_enviadas_por_mes_para_Aquidauana.png')
    writeFileSync(path, ChartMultipleLine)

    console.log("Juro solenemente não fazer nada de bom")
}

