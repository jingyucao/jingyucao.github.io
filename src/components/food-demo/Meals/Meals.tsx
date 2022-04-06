import MealTab from "./MealTab";
import {useCallback, useEffect, useState} from "react";
import MealList from "./MealList";
import classes from "./Meals.module.css";

type Meal = {
    id: string,
    name: string,
    description: string,
    price: number
}

const Meals = () => {

    const [meals, setMeals] = useState([] as Meal[]);
    const [error, setError] = useState(null);
    const [mealCategory, setMealCategory] = useState('makis');

    const chooseMealHandler = (event: any) => {
        setMealCategory(event.target.id)
        console.log(mealCategory)
    }

    const fetchMealsHandler = useCallback(async () => {
        try {
            const response = await fetch(`https://react-website-2022-default-rtdb.europe-west1.firebasedatabase.app/meals/${mealCategory}.json`)
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
    }, [mealCategory])

    useEffect(() => {
        fetchMealsHandler()
    }, [fetchMealsHandler])

    let content: any = <p>Found no Meals.</p>
    if (error) {
        content = <p>Something went wrong, please try again.</p>
    }
    if (meals.length > 0) {
        content = <MealList meals={meals}/>
    }

    return (
        <div className={classes.main}>
            <MealTab onChooseMeal={chooseMealHandler}/>
            <div className={classes.card}>
                {content}
            </div>
        </div>

    )
}

export default Meals;
