import classes from './MealItem.module.css';

const MealItem = (props: any) => {
    return (
        <li className={classes.mealItem}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes['mealItem_description']}>{props.description}</div>
                <div className={classes['mealItem_price']}>€ {props.price}</div>
            </div>
        </li>
    )
}

export default MealItem;
