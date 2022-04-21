import { getVacsAppliedStatistic } from "./models/dao/VacInfosAppliedDAO";
import { getVacsSendStatistic } from "./models/dao/VacInfosSendDAO";
import VacsSendResumeType from "./models/types/VacsSendResumeType";
import VacTypesApplied from "./models/types/VacsTypeApplied";
import { createAppliedChart } from "./utils/ChartAppliedUtils";
import { CreateSendedChart } from "./utils/ChartSendUtils";

const dosesEnviadas: VacsSendResumeType[] = getVacsSendStatistic()
CreateSendedChart(dosesEnviadas)

const dosesAplicadas: any = getVacsAppliedStatistic()
createAppliedChart(dosesAplicadas)
