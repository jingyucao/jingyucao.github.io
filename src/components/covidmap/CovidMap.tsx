import classes from "./CovidMap.module.css";
import Card from "../UI/Card";
import StatesData from "./CovidData/StatesData";
import IncidenceData from "./CovidData/IncidenceData";
import background from "./background.jpg";
import React from "react";
import Introduction from "../UI/Introduction";

const CovidMap = () => {

    const text = 'Covid Map is written with React in Typescript, styled with Css Module and visualized with an open source JavaScript Library Echarts.\n' +
        'The Covid-19 data is fetched from Robert Koch-Institut using REST.'

    return (
        <div className={classes.covidMap}>
            <Introduction style={{position: 'relative', width: '70%'}}>{text}</Introduction>
            <Card style={{width: '70%'}}>
                <IncidenceData/>
            </Card>
            <Card style={{width: '70%'}}>
                <StatesData/>
            </Card>
            <div className={classes.bgColor}/>
            {/*<img className={classes.bgImg} src={background} alt="background"/>*/}
        </div>
    )
}

export default CovidMap;
