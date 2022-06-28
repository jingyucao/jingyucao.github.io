import classes from "./Vaccination.module.css";
import {useCallback, useEffect, useState} from "react";
import VaccinationTable from "./VaccinationTable";

const Vaccination = () => {

    const [vaccinationData, setVaccinationData] = useState([] as any);

    const fetchDataHandler = useCallback(async () => {
        try {
            const response = await fetch('https://api.corona-zahlen.org/vaccinations/germany')
            if (!response.ok) {
                throw new Error('Something went wrong loading the data!')
            }
            const data = await response.json();

            let vaccinationData = [];

            const noVaccination = await Math.abs((1 - data.data.quote) * 100).toFixed(1);

            const firstVaccination = await Math.abs(data.data.quote * 100).toFixed(1);

            const secondVaccination = await Math.abs(data.data.secondVaccination.quote * 100).toFixed(1);

            const firstBooster = await Math.abs(data.data.boosterVaccination.quote * 100).toFixed(1);

            const secondBooster = await Math.abs(data.data['2ndBoosterVaccination'].quote * 100).toFixed(1);

            const firstAndSecondBoosterDiff = ((+firstBooster) - (+secondBooster)).toFixed(1);

            const fullVaccinationAndBoosterDiff = ((+secondVaccination) - (+firstBooster)).toFixed(1);

            const firstAndSecondVaccinationDiff = ((+firstVaccination) - (+secondVaccination)).toFixed(1);

            vaccinationData.push({noVaccination: noVaccination},
                {firstVaccination: firstVaccination},
                {secondVaccination:secondVaccination},
                {firstBooster:firstBooster},
                {secondBooster:secondBooster},
                {firstAndSecondVaccinationDiff:firstAndSecondVaccinationDiff},
                {fullVaccinationAndBoosterDiff:fullVaccinationAndBoosterDiff},
                {firstAndSecondBoosterDiff:firstAndSecondBoosterDiff});

            console.log(vaccinationData);

            setVaccinationData(vaccinationData);

        } catch (error: any) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchDataHandler()
    }, [fetchDataHandler])

    return (
        <div className={classes.wrapper}>
            <p className={classes.rateTitle}>Vaccination rate of Germany</p>
            <VaccinationTable data={vaccinationData}/>
        </div>
    )
}

export default Vaccination
