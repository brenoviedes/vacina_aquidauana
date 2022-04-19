
import { parse } from "csv-parse/sync"
import { readFileSync } from "fs"
import { join} from "path"
import VacTypesSend from "../types/VacTypesSend"


export const parseVacsSendCSVFile = () => {
    const filePath = join(__dirname, '..', '..', 'data', 'dosesEnviadas.csv' )
    const strContent = readFileSync(filePath, 'utf-8')
    let parsedContent: any[] = parse(strContent)
    parsedContent = parsedContent.slice(1)
    return parsedContent
}



export const getVacsSend = (row: any): VacTypesSend => {
    let [date, , vacType, amount, , , , ] = row

    let slicedDate = date.split('/')
    
    const year = parseInt(slicedDate[2])
    const month =  parseInt(slicedDate[1]) - 1
    let monthName = ''

    switch (month) {
        case 0:
            monthName = 'January'
            break
        case 1:
            monthName = 'February'
            break 
        case 2:
            monthName = 'March'
            break
        case 3:
            monthName = 'April'
            break
        case 4:
            monthName = 'May'
            break
        case 5:
            monthName = 'June'
            break
        case 6:
            monthName = 'July'
            break
        case 7:
            monthName = 'August'
            break
        case 8:
            monthName = 'September'
            break 
        case 9:
            monthName = 'October'
            break
        case 10:
            monthName = 'November'
            break
        case 11:
            monthName = 'December'
    }

    vacType = vacType 
    amount = parseInt(amount.replace(/\./g, ''))

    const vacsMonth: VacTypesSend = {
        year,
        monthName,
        vacType,
        amount: parseInt(amount)
    }

    return vacsMonth
} 




export const getVacsSendStatistic =(): VacTypesSend[] => {
    const vacsSendArray = parseVacsSendCSVFile()
    const vacsSend: VacTypesSend[] = [] 

    for (const i of vacsSendArray) {
        let vac = getVacsSend(i)
        vacsSend.push(vac)
    }
    // console.log(vacsSend)

    const vacsSendResume = {}

    vacsSend.forEach(item => {

        if(vacsSendResume[`${item.year}/${item.monthName}`]) {
            vacsSendResume[`${item.year}/${item.monthName}`] += 1

        } else {
            vacsSendResume[`${item.year}/${item.monthName}`] = 1
        }
    })

    console.log(vacsSend)
    console.log(vacsSendResume)

    // const obj = {
//     'janeiro/2021': {
//         jenssen: 23432,
//         oxford: 23423,
//         pfizer: 23423
//     }

    return vacsSend
}


