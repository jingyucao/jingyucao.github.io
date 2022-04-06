import classes from "./MealTab.module.css";
import React from "react";

const MealTab = () => {
    return (
        <div className={classes.tab}>
            <button className={classes.tabItem}>
                Maki
                <div className={classes.tabItemQuantity}>
                    (8 pieces)
                </div>
            </button>
            <button className={classes.tabItem}>
                Nigiri
                <div className={classes.tabItemQuantity}>
                    (2 pieces)
                </div>
            </button>
            <button className={classes.tabItem}>
                Ura-maki
                <div className={classes.tabItemQuantity}>
                    (4 pieces)
                </div>
            </button>
            <button className={classes.tabItem}>
                Sashimi
                <div className={classes.tabItemQuantity}>
                    (5 pieces)
                </div>
            </button>
        </div>
    )
}

export default MealTab;
