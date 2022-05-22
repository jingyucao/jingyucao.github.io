import {useCallback, useEffect, useState} from "react";
import StatesDataMap from "./StatesDataMap";

const StatesData = () => {

    const [statesCovidInfo, setStatesCovidInfo] = useState([] as any);

    const fetchStatesDataHandler = useCallback(async () => {
        try {
            const response = await fetch('https://api.corona-zahlen.org/states')
            if (!response.ok) {
                throw new Error('Something went wrong to load the menu!')
            }
            const jsonData = await response.json();

            let dataObj = {} as any;
            let dataArr = [];

            for (const key in jsonData.data) {
                dataObj = jsonData.data[key];
                dataArr.push(dataObj)
            }

            let statesMapObj = {} as any;
            dataArr.forEach((item, key) => {
                statesMapObj[item.name] = {
                    "name": item.name,
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
                statesMapObj[key].name = key;
                statesMapList.push(statesMapObj[key])
            }
            let statesMapListSort = statesMapList.sort((a, b) => {
                if (a.totalconfirmed > b.totalconfirmed) {
                    return -1
                } else {
                    return 1
                }
            });

            setStatesCovidInfo(statesMapListSort);

        } catch (error: any) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchStatesDataHandler()
    }, [fetchStatesDataHandler])

    return (
        <div>
            Hello Again.
            <StatesDataMap data={statesCovidInfo}/>
        </div>
    )
}

export default StatesData;
