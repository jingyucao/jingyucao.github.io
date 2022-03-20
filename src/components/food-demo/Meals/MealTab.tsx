import classes from "./MealTab.module.css";
import React from "react";

const MealTab = () => {
    return (
        <div className={classes.tab}>
            <div className={classes.tabItem}>
                Maki
                <div className={classes.tabItemQuantity}>
                    (8 pieces)
                </div>
            </div>
            <div className={classes.tabItem}>
                Nigiri
                <div className={classes.tabItemQuantity}>
                    (2 pieces)
                </div>
            </div>
            <div className={classes.tabItem}>
                Ura-maki
                <div className={classes.tabItemQuantity}>
                    (4 pieces)
                </div>
            </div>
            <div className={classes.tabItem}>
                Sashimi
                <div className={classes.tabItemQuantity}>
                    (5 pieces)
                </div>
            </div>
        </div>
    )
}

export default MealTab;
