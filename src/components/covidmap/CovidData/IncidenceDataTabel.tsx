import {useEffect, useRef} from "react";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/line';
import classes from "./CovidData.module.css";
import {chartProps} from "./StatesDataMap";

let echarts = require('echarts/lib/echarts');

const IncidenceDataTabel = (props: chartProps) => {

    const chartRef = useRef(null) as any;
    let covidIncidenceChart = null as any;

    let arrOfDate = props.data.map((a: any) => a.date.substr(0, 10));
    let arrOfIncidence = props.data.map((a: any) => a.weekIncidence.toFixed(2));

    const options = {
        title: {
            text: 'COVID-19 weekly incidence rate of Germany in the last 90 days',
            subtext: 'Data from Robert Koch-Institut',
            sublink: 'https://www.rki.de/DE/Home/homepage_node.html',
            left: 'left',
            top: 10,
            textStyle: {
                fontFamily: '"Work Sans", sans-serif',
                fontSize: 15,
                fontWeight: 600,
                color: '#666'
            },
            subtextStyle: {
                fontFamily: '"Work Sans", sans-serif',
                fontWeight: 300
            }
        },
        grid: {
            top: 100,
            bottom: 50
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
                    color: '#fafafa',
                    width: 2,
                    cap: 'square'
                }
            },
            axisLabel: {
                fontFamily: '"Work Sans", sans-serif',
                align: 'center',
                margin: '12'
            },
            axisPointer: {
                type: 'shadow'
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: 'true',
                lineStyle: {
                    color: '#fafafa',
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
            name: 'Incidence Rate'
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
        <div className={classes.container}>
            <div className={classes.incidence} ref={chartRef} id='incidence'/>
        </div>
    )
}

export default IncidenceDataTabel;
