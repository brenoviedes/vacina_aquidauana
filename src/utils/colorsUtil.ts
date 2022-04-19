import { getVacsAppliedStatistic } from "../models/dao/VacInfosAppliedDAO";

let colorsChart = {}

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function arrayColors() {
    const appliedDoses = getVacsAppliedStatistic()

    let objlength = Object.keys(appliedDoses).length

    for (let i = 0; i < objlength; i++) {

        colorsChart[i] = `rbg(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`


    }

    console.log(colorsChart)
    return colorsChart
}

export const colorsPie = arrayColors()
