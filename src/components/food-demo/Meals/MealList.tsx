import MealItem from "./MealItem/MealItem";
import React from "react";

type Meal = {
    id: string,
    name: string,
    description: string,
    price: number
}

const MealList: React.FC<{ meals: Meal[] }> = (props) => {

    const ulStyle = {
        listStyle: "none",
        padding: "0",
        margin: "0",
    }

    const content = props.meals.map((meal: Meal) =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}/>
    )

    return (
        <div>
            <ul style={ulStyle}>
                {content}
            </ul>
        </div>
    )
}

export default MealList;
