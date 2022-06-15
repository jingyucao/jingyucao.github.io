import {useEffect, useRef} from "react";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/geo';
import {MapChart} from 'echarts/charts';
import geoJson from "./germanymap.json";
import classes from './StatesMap.module.css';

export interface chartProps {
    options: any
}

let echarts = require('echarts/lib/echarts');

echarts.use([MapChart]);
echarts.registerMap("germany", {geoJSON: geoJson});

const StatesDataMap = (props: chartProps) => {

    const chartRef = useRef(null) as any;
    let covidMapChart = null as any;

    const renderChart = () => {
        const chart = echarts.getInstanceByDom(chartRef.current)
        if (chart) {
            covidMapChart = chart;
        } else {
            covidMapChart = echarts.init(chartRef.current);
            window.addEventListener('resize', () => {
                covidMapChart && covidMapChart.resize();
            })
        }
        covidMapChart.setOption(props.options)
    };

    useEffect(() => {
            renderChart()
            return () => {
                covidMapChart && covidMapChart.dispose()
            }
        }
    )

    return (
        <div className={classes.container}>
            <div className={classes.map} ref={chartRef} id='map'/>
        </div>
    )
}

export default StatesDataMap;
