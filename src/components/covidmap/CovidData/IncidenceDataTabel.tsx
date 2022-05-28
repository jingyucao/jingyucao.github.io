import {useEffect, useRef} from "react";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/line';
import classes from "./CovidData.module.css";

let echarts = require('echarts/lib/echarts');

const StatesDataMap = () => {

    const chartRef = useRef(null) as any;
    let mapChart = null as any;

    const options = {
        title: {
            text: "测试表格-react-hook"
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    }

    const renderChart = () => {
        const chart = echarts.getInstanceByDom(chartRef.current)
        if (chart) {
            mapChart = chart
        } else {
            mapChart = echarts.init(chartRef.current)
        }
        mapChart.setOption(options)
    };

    useEffect(() => {
        renderChart()
        return () => {
            mapChart && mapChart.dispose()
        }
    })

    return (
        <div className={classes.container}>
            <div className={classes.incidence} ref={chartRef} id='incidence'/>
        </div>
    )
}

export default StatesDataMap;
