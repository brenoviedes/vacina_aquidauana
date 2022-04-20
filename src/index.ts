import { getVacsAppliedStatistic } from "./models/dao/VacInfosAppliedDAO";
import { getVacsSendStatistic } from "./models/dao/VacInfosSendDAO";
import { createAppliedChart } from "./utils/ChartAppliedUtils";
import { getSendChart } from "./utils/ChartSendUtils";

getVacsSendStatistic()
getSendChart()

const dosesAplicadas: any = getVacsAppliedStatistic()
createAppliedChart(dosesAplicadas)
