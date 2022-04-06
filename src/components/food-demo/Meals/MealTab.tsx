import classes from "./MealTab.module.css";
import React from "react";

const MealTab = (props: any) => {

    return (
        <div className={classes.tab}>
            <button className={classes.tabItem} onClick={props.onChooseMeal} id='makis'>
                Maki
                <div className={classes.tabItemQuantity}>
                    (8 pieces)
                </div>
            </button>
            <button className={classes.tabItem} onClick={props.onChooseMeal} id='nigiri'>
                Nigiri
                <div className={classes.tabItemQuantity}>
                    (2 pieces)
                </div>
            </button>
            <button className={classes.tabItem} onClick={props.onChooseMeal} id='uramakis'>
                Ura-maki
                <div className={classes.tabItemQuantity}>
                    (4 pieces)
                </div>
            </button>
            <button className={classes.tabItem} onClick={props.onChooseMeal} id='sashimi'>
                Sashimi
                <div className={classes.tabItemQuantity}>
                    (5 pieces)
                </div>
            </button>
        </div>
    )
}

export default MealTab;
