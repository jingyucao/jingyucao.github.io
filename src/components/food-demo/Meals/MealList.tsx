import classes from "./MealList.module.css";
import MealItem from "./MealItem";

type Meal = {
    id: string,
    name: string,
    description: string,
    price: number
}

const MealList = (props:any) => {

    const content=props.meals.map((meal: Meal) =>
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
                {content}
            </ul>
        </div>
    )
}

export default MealList;
