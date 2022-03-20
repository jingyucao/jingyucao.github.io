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
            const response = await fetch('https://react-website-2022-default-rtdb.europe-west1.firebasedatabase.app/meals/makis.json')
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json();
            const loadedMeals = [] as Meal[];
            for (const key in data) {
                loadedMeals.push(
                    {
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price.toFixed(2)
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

    const mealContent = meals.map((meal: Meal) =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}/>
    )

    return (
        <div className={classes.card}>
            <ul>
                {mealContent}
            </ul>
        </div>
    )
}

export default MealList;
