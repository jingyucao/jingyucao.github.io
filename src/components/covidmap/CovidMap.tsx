import classes from "./CovidMap.module.css";
import Card from "../UI/Card";
import StatesData from "./CovidData/StatesData";
import IncidenceData from "./CovidData/IncidenceData";
import VaccinationData from "./CovidData/VaccinationData";

const CovidMap = () => {
    return (
        <div>
            <Card>
                <p>Hello World</p>
                <StatesData/>
                <IncidenceData/>
                <VaccinationData/>
            </Card>
            <div className={classes.bgColor}/>
        </div>
    )
}

export default CovidMap;
