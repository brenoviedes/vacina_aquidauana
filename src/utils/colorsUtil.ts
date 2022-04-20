import { getVacsAppliedStatistic } from "../models/dao/VacInfosAppliedDAO";


function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

export function arrayColors() {
    const appliedDoses = getVacsAppliedStatistic()

    let objlength = Object.keys(appliedDoses).length
    const colors = []
    
    for (let i = 0; i < objlength; i++) {

        const color = gera_cor()
        colors.push(color)

    }
    
    return colors
}

export const colorsPie = arrayColors()
