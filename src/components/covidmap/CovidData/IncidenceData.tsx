import {useCallback, useEffect, useState} from "react";
import IncidenceDataTabel from "./IncidenceDataTabel";

const IncidenceData = () => {

    const [incidenceData, setIncidenceData] = useState([] as any);

    const fetchMealsHandler = useCallback(async () => {
        try {
            const response = await fetch('https://api.corona-zahlen.org/germany/history/incidence/90')
            if (!response.ok) {
                throw new Error('Something went wrong loading the data!')
            }
            const data = await response.json();

            setIncidenceData(data.data);

        } catch (error: any) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchMealsHandler()
    }, [fetchMealsHandler])

    return (
        <IncidenceDataTabel data={incidenceData}/>
    )
}

export default IncidenceData;
