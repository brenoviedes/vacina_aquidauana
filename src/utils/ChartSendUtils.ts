import { exit } from "process";
import { getVacsAppliedStatistic } from "../models/dao/VacInfosAppliedDAO";
import { getVacsSendStatistic } from "../models/dao/VacInfosSendDAO";
import VacTypesSend from "../models/types/VacTypesSend";


export const getSendChart = ()  => {

    const labels: string[] = []

    const sendDoses = getVacsSendStatistic()

    // console.log(Object.keys(sendDoses))

    Object.keys(sendDoses).forEach(item => {

        const dateSend = `${item}`
        labels.push(dateSend)
    })

    //console.log(labels)

    const dataValues: any[] = []
    Object.keys(sendDoses).forEach(item => {
        // console.log(item + sendDoses[item])
        if(item) {
            
            const obj = sendDoses[item]
            if(obj) {
                dataValues.push(obj)
                
            }
        }
    })
   // console.log(dataValues)

    const pfizer: any = []
    dataValues.forEach(i => {

       // console.log(Object.keys(i).length)

        Object.keys(i).forEach(item => {
           // console.log(item)

            for(let x of i) {
                console.log(x)
            }
        })

       
    })

    console.log(pfizer)

    // !!! Não conseguimos resgatar os valores do json das vacinas enviadas para atribuir a opção data e gerar o grpafico  !!!
}