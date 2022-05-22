import {useCallback, useEffect} from "react";
import IncidenceDataTabel from "./IncidenceDataTabel";

const IncidenceData = () => {

    const fetchMealsHandler = useCallback(async () => {
        try {
            const response = await fetch('https://api.corona-zahlen.org/germany/history/incidence/365')
            if (!response.ok) {
                throw new Error('Something went wrong to load the menu!')
            }
            const data = await response.json();

        } catch (error: any) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchMealsHandler()
    }, [fetchMealsHandler])

    return (
        <div>
            R-Rate
            <IncidenceDataTabel/>
        </div>
    )
}

export default IncidenceData;
