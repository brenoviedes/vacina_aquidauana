import { getVacsAppliedStatistic } from "./models/dao/VacInfosAppliedDAO";
import { getVacsSendStatistic } from "./models/dao/VacInfosSendDAO";
import { createAppliedChart } from "./utils/ChartAppliedUtils";
import { arrayColors } from "./utils/colorsUtil";


//getVacsSendStatistic()
const dosesAplicadas: any = getVacsAppliedStatistic()
createAppliedChart(dosesAplicadas)

arrayColors()