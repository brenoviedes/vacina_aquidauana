import { ChartType } from "chart.js";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import { writeFileSync } from "fs";
import { join } from "path";
import { getVacsAppliedStatistic } from "../models/dao/VacInfosAppliedDAO";
import VacTypesApplied from "../models/types/VacsTypeApplied";
import { colorsPie } from "./colorsUtil";


const getAppliedChart = (vacApplied: VacTypesApplied) => {
    const labels: string[] = []

    const appliedDoses = getVacsAppliedStatistic()

    Object.keys(appliedDoses).forEach(item => {
        const phrase = `${item}: ${appliedDoses[item]}`
        labels.push(phrase)
    })

    // console.log(labels)

    const data: number[] = []

    Object.keys(appliedDoses).forEach(item => {
        const doses = appliedDoses[item]
        data.push(doses)
    })

    // console.log(data)

    const charInfo = {
        labels,
        datasets: [
            {
                backgroundColor: [
                'rgb(66, 66, 111)',
                'rgb(0, 255, 0)',
                'rgb(210, 105, 30)',
                'rgb(255, 0, 255)',
            ],
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

    const fileName = `Grupos_Vacinados.png`
    const path = join(__dirname, '..', 'charts', fileName)
    writeFileSync(path, image)

}

