import {useEffect, useRef} from "react";
import classes from "./IncidenceRate.module.css";

interface chartProps {
    data: any
}

let echarts = require('echarts/lib/echarts');

const IncidenceRateTabel = (props: chartProps) => {

    const chartRef = useRef(null) as any;
    let covidIncidenceChart = null as any;

    let arrOfDate = props.data.map((a: any) => a.date.substr(0, 10));
    let arrOfIncidence = props.data.map((a: any) => a.weekIncidence.toFixed(2));

    const options = {
        grid: {
            bottom: 50,
            left: 50
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: arrOfDate,
            axisLine: {
                show: 'true',
                lineStyle: {
                    color: '#666',
                    width: 2,
                    cap: 'square'
                }
            },
            axisLabel: {
                fontFamily: '"Work Sans", sans-serif',
                align: 'center',
                margin: '12',
            },
            axisPointer: {
                type: 'shadow'
            },

        },
        yAxis: {
            // name: 'Y-Axis',
            // nameLocation: 'middle',
            type: 'value',
            axisLine: {
                show: 'true',
                lineStyle: {
                    color: '#666',
                    width: 2,
                    cap: 'square'
                }
            },
            axisLabel: {
                fontFamily: '"Work Sans", sans-serif',
                align: 'right',
                margin: '12'
            },
            splitLine: {
                lineStyle: {
                    type: 'dotted',
                }
            }
        },
        series: [{
            data: arrOfIncidence,
            type: 'line',
            name: 'Incidence Rate',
            areaStyle: {
                color: 'rgba(66, 165, 245, 0.5)'
            }
        }]
    }

    const renderChart = () => {
        const chart = echarts.getInstanceByDom(chartRef.current)
        if (chart) {
            covidIncidenceChart = chart
        } else {
            covidIncidenceChart = echarts.init(chartRef.current)
            window.addEventListener('resize', () => {
                covidIncidenceChart && covidIncidenceChart.resize();
            })
        }
        covidIncidenceChart.setOption(options)
    };

    useEffect(() => {
        renderChart()
        return () => {
            covidIncidenceChart && covidIncidenceChart.dispose()
        }
    })

    return (
        <div className={classes.rateContainer}>
            <div className={classes.incidence} ref={chartRef} id='incidence'/>
        </div>
    )
}

export default IncidenceRateTabel;
