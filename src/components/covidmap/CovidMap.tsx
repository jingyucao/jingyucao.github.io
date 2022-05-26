import classes from "./CovidMap.module.css";
import Card from "../UI/Card";
import StatesData from "./CovidData/StatesData";
import IncidenceData from "./CovidData/IncidenceData";
import VaccinationData from "./CovidData/VaccinationData";
import background from "./background.jpg";
import React from "react";
import Introduction from "../UI/Introduction";


const CovidMap = () => {
    return (
        <div className={classes.covidMap}>
            <Introduction style={{position:'relative'}}>Hello</Introduction>
            <Card>
                <StatesData/>
                <IncidenceData/>
                <VaccinationData/>
            </Card>
            <img className={classes.bgImg} src={background} alt="background"/>
        </div>
    )
}

export default CovidMap;
