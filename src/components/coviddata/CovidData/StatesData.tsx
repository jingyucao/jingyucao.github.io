import {useCallback, useEffect, useState} from "react";
import classes from './StatesData.module.css';
import MapSetting from "./MapSetting";

const StatesData = () => {

    const [statesCovidInfo, setStatesCovidInfo] = useState([] as any);

    const fetchStatesDataHandler = useCallback(async () => {
        try {
            const response = await fetch('https://api.corona-zahlen.org/states')
            if (!response.ok) {
                throw new Error('Something went wrong loading the data!')
            }
            const jsonData = await response.json();

            console.log(jsonData)

            let dataObj = {} as any;
            let dataArr = [];

            for (const key in jsonData.data) {
                dataObj = jsonData.data[key];
                dataArr.push(dataObj)
            }

            let statesMapObj = {} as any;
            dataArr.forEach((item) => {
                statesMapObj[item.id] = {
                    "name":item.abbreviation,
                    "state": item.name,
                    "id":item.id,
                    "confirmed": item.delta.cases,
                    "deaths": item.delta.deaths,
                    "recovered": item.delta.recovered,
                    "totalconfirmed": item.cases,
                    "totaldeaths": item.deaths,
                    "totalrecovered": item.recovered,
                    "abbreviation": item.abbreviation,
                    "casesPer100k": item.casesPer100k,
                    "casesPerWeek": item.casesPerWeek,
                    "deathsPerWeek": item.deathsPerWeek,
                    "population": item.population,
                    "weekIncidence": item.weekIncidence
                }
            });

            let statesMapList = [];
            for (const key in statesMapObj) {
                statesMapObj[key].id = key;
                statesMapList.push(statesMapObj[key])
            }

            console.log(statesMapList)

            setStatesCovidInfo(statesMapList);

        } catch (error: any) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchStatesDataHandler()
    }, [fetchStatesDataHandler])

    return (
        <div className={classes.wrapper}>
            <p className={classes.mapTitle}>COVID-19 infection rate in Germany in 2022 by federal state</p>
            <p className={classes.mapSubtitle}>Data from Robert Koch-Institut</p>
            <p className={classes.mapSubtitle}>Last Update: {}</p>
            <div className={classes.computer}>
                <MapSetting data={statesCovidInfo}/>
            </div>
        </div>
    )
}

export default StatesData;
