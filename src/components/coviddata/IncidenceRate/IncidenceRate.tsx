import {useCallback, useEffect, useState} from "react";
import IncidenceRateTabel from "./IncidenceRateTabel";
import classes from "./IncidenceRate.module.css";

const IncidenceRate = () => {

    const [incidenceData, setIncidenceData] = useState([] as any);
    const [lastUpdateDate,setLastUpdateDate] = useState('');

    const fetchMealsHandler = useCallback(async () => {
        try {
            const response = await fetch('https://api.corona-zahlen.org/germany/history/incidence/90')
            if (!response.ok) {
                throw new Error('Something went wrong loading the data!')
            }
            const data = await response.json();

            console.log(data)

            setLastUpdateDate(data.meta.lastUpdate.slice(0, 10))
            setIncidenceData(data.data);

        } catch (error: any) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchMealsHandler()
    }, [fetchMealsHandler])


    return (
        <div className={classes.wrapper}>
            <p className={classes.rateTitle}>COVID-19 weekly incidence rate of Germany <br/> in the last 90 days</p>
            <p className={classes.rateSubtitle}>Data from Robert Koch-Institut</p>
            <p className={classes.rateSubtitle}>Last Update: {lastUpdateDate}</p>
            <IncidenceRateTabel data={incidenceData}/>
        </div>
    )
}

export default IncidenceRate;
