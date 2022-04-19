
import { parse } from "csv-parse/sync"
import { readFileSync } from "fs"
import { join} from "path"
import VacTypesApplied from "../types/VacsTypeApplied"
import VacTypesSend from "../types/VacTypesSend"


export const parseVacsAppliedCSVFile = () => {
    const filePath = join(__dirname, '..', '..', 'data', 'dosesAplicadas.csv' )
    const strContent = readFileSync(filePath, 'utf-8')
    let parsedContent: any[] = parse(strContent)
    parsedContent = parsedContent.slice(1)
    return parsedContent
}



export const getVacsApplied = (row: any): VacTypesApplied => {
    let [ , , , socialGroup, appliedDoses, , , , ] = row

    socialGroup = socialGroup
    appliedDoses = appliedDoses.replace(/\./g, '')
    
    const vacsApplied: VacTypesApplied = {
        appliedDoses: parseInt(appliedDoses),
        socialGroup
    }

    return vacsApplied
} 

export const getVacsAppliedStatistic =(): VacTypesApplied | Object => {
    const vacsAppliedArray = parseVacsAppliedCSVFile()
    const vacsApplied: VacTypesApplied[] = [] 

    for (const i of vacsAppliedArray) {
        let vac = getVacsApplied(i)
        vacsApplied.push(vac)
    }

    const vacsAppliedResume  = {}

    vacsApplied.forEach(item => {
        if(vacsAppliedResume[item.socialGroup]) {
            vacsAppliedResume[item.socialGroup] += item.appliedDoses 
        } else {
            vacsAppliedResume[item.socialGroup] = item.appliedDoses
        }

    })

    // console.log(vacsAppliedResume)

    return vacsAppliedResume
}


