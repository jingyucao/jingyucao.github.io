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

            const noVaccination = await Math.abs((1 - data.data.quote) * 100).toFixed(1);

            const firstVaccination = await Math.abs(data.data.quote * 100).toFixed(1);

            const firstBooster = await Math.abs(data.data.boosterVaccination.quote * 100).toFixed(1);


            console.log(data)

            console.log(noVaccination)

            console.log(firstVaccination)

            console.log(firstBooster)

            setVaccinationData(data.data);

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
