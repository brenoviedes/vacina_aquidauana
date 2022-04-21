import { ChartType } from "chart.js";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import { writeFileSync } from "fs";
import { join } from "path";

import VacTypesApplied from "../models/types/VacsTypeApplied";
import { colorsRandom } from "./colorsUtil";

const getAppliedChart = (vacApplied: VacTypesApplied) => {
    const labels: string[] = []

    Object.keys(vacApplied).forEach(item => {
        const phrase = `${item}: ${vacApplied[item]}`
        labels.push(phrase)
    })

    const data: number[] = []

    Object.keys(vacApplied).forEach(item => {
        const doses = vacApplied[item]
        data.push(doses)
    })

    const charInfo = {
        labels,
        datasets: [
            {
                backgroundColor: colorsRandom,
                data,
            }
        ]
    }

    return charInfo
}

export const createAppliedChart = (vacApplied: VacTypesApplied) => {
    const data = getAppliedChart(vacApplied)

    const chart = new ChartJSNodeCanvas({
        height: 800,
        width: 800,
        backgroundColour: '#FFF'
    })

    let chartTitle = 'Doses aplicadas em cada tipo de grupo social'

    const image = chart.renderToBufferSync({
        type: <ChartType>'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: chartTitle
                }
            }
        },
    })

    const fileName = `Grupos_Vacinados_em_Aquidauana.png`
    const path = join(__dirname, '..', 'charts', fileName)
    writeFileSync(path, image)
}

