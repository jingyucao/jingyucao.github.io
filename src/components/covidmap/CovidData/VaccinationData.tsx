import {useCallback, useEffect} from "react";

const VaccinationData = () => {

    const fetchMealsHandler = useCallback(async () => {
        try {
            const response = await fetch('https://api.corona-zahlen.org/vaccinations/history')
            if (!response.ok) {
                throw new Error('Something went wrong loading the data!')
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
            Vaccination
        </div>
    )
}

export default VaccinationData;
