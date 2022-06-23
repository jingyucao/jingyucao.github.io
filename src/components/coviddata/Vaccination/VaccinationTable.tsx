import classes from "./Vaccination.module.css";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend';
import {useEffect, useRef} from "react";

interface chartProps {
    data: any
}

let echarts = require('echarts/lib/echarts');

const VaccinationTable = (props: chartProps) => {

    const chartRef = useRef(null) as any;
    let vaccinationChart = null as any;

    const options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        grid: {
            top: '5%',
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['']
        },
        series: [
            {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [1]
            },
            {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [2]
            },
            {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [4]
            },
            {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [2]
            },
            {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [1]
            }
        ]
    };

    const renderChart = () => {
        const chart = echarts.getInstanceByDom(chartRef.current)
        if (chart) {
            vaccinationChart = chart
        } else {
            vaccinationChart = echarts.init(chartRef.current)
            window.addEventListener('resize', () => {
                vaccinationChart && vaccinationChart.resize();
            })
        }
        vaccinationChart.setOption(options)
    };

    useEffect(() => {
        renderChart()
        return () => {
            vaccinationChart && vaccinationChart.dispose()
        }
    })

    return (
        <div className={classes.rateContainer}>
            <div className={classes.vaccination} ref={chartRef} id='vaccination'/>
        </div>
    )
}

export default VaccinationTable;
