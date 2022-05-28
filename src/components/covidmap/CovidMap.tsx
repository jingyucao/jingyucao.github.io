import classes from "./CovidMap.module.css";
import Card from "../UI/Card";
import StatesData from "./CovidData/StatesData";
import IncidenceData from "./CovidData/IncidenceData";
import VaccinationData from "./CovidData/VaccinationData";
import background from "./background.jpg";
import React from "react";
import Introduction from "../UI/Introduction";

const CovidMap = () => {

    const text = 'Covid Map is a web application, written with React in Typescript, styled with Css Module \n' +
        'and visualized with an open source JavaScript Library Echarts. Covid data is fetched from Robert Koch-Institut.'

    return (
        <div className={classes.covidMap}>
            <Introduction style={{position:'relative',width:'70%'}}>{text}</Introduction>
            <Card style={{width:'70%'}}>
                <StatesData/>
            </Card>
            <Card style={{width:'70%'}}>
                <IncidenceData/>
                <VaccinationData/>
            </Card>
            <img className={classes.bgImg} src={background} alt="background"/>
        </div>
    )
}

export default CovidMap;
