import classes from "./MealList.module.css";
import MealItem from "./MealItem";
import {useCallback, useEffect, useState} from "react";

type Meal = {
    id: string,
    name: string,
    description: string,
    price: number
}

const MealList = () => {

    const [meals, setMeals] = useState([] as Meal[]);
    const [error, setError] = useState(null);

    const fetchMealsHandler = useCallback(async () => {
        try {
            const response = await fetch('https://react-website-2022-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json();

            const makiData = await data.makis;

            const loadedMeals = [] as Meal[];
            for (const key in makiData) {
                loadedMeals.push(
                    {
                        id: key,
                        name: makiData[key].name,
                        description: makiData[key].description,
                        price: makiData[key].price.toFixed(2)
                    }
                )
            }
            setMeals(loadedMeals)
        } catch (error: any) {
            setError(error.message)
        }
    }, [])

    useEffect(() => {
        fetchMealsHandler()
    }, [fetchMealsHandler])

    let content:any = <p>Found no Meals.</p>
    if (error) {
        content = <p>{error}</p>
    }
    if (meals.length > 0) {
        content = meals.map((meal: Meal) =>
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}/>
        )
    }

    return (
        <div className={classes.card}>
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default MealList;
