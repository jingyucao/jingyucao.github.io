import {useCallback, useEffect} from "react";

const StatesData = () => {

    const fetchMealsHandler = useCallback(async () => {
        try {
            const response = await fetch('https://api.corona-zahlen.org/states')
            if (!response.ok) {
                throw new Error('Something went wrong to load the menu!')
            }
            const data = await response.json();
            console.log(data);

        } catch (error: any) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchMealsHandler()
    }, [fetchMealsHandler])

    return (
        <div>
            Hello Again.
        </div>
    )
}

export default StatesData;
