import { getVacsAppliedStatistic } from "../models/dao/VacInfosAppliedDAO";
import colorLib from '@kurkle/color';

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

export const colorsRandom = arrayColors()

export function gerar_corRGB() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
 
    return `rgba(${r}, ${g}, ${b})`;
 }

 export const colorsRandomRGB = gerar_corRGB()


export function transparentize(value: string, opacity: number) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}
