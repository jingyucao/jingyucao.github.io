import classes from "./CovidData.module.css";
import Card from "../UI/Card";
import StatesData from "./CovidData/StatesData";
import IncidenceRate from "./IncidenceRate/IncidenceRate";
import React from "react";
import Introduction from "../UI/Introduction";
import Hygien from "./Hygien/Hygien";

const CovidData = () => {

    const text = 'Covid Map is written with React in Typescript, styled with Css Module and visualized with an open source JavaScript Library Echarts.\n' +
        'The Covid-19 data is fetched from Robert Koch-Institut using REST.'

    return (
        <div className={classes.covid}>
            <Introduction style={{position: 'relative', width: '70%'}}>{text}</Introduction>
            <div className={classes.container}>
                <div className={classes.left}>
                    <Card style={{width: '100%', marginBottom: '1rem'}}>
                        <Hygien/>
                    </Card>
                    <Card style={{width: '100%'}}>
                        <IncidenceRate/>
                    </Card>
                </div>
                <div className={classes.right}>
                    <Card style={{width: '100%'}}>
                        <StatesData/>
                    </Card>
                </div>
            </div>
            <div className={classes.bgColor}/>
        </div>
    )
}

export default CovidData;
