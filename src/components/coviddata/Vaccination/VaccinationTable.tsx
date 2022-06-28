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

    // let dataList: any = [
    //     {name: 'noVaccination', value: props.data[0].noVaccination},
    //     {name: 'firstVaccination', value: props.data[1].firstVaccination},
    //     {name: 'secondVaccination', value: props.data[2].secondVaccination},
    //     {name: 'firstBooster', value: props.data[3].firstBooster},
    //     {name: 'secondBooster', value: props.data[4].secondVaccination},
    //     {name: 'firstAndSecondVaccinationDiff', value: props.data[5].firstAndSecondVaccinationDiff},
    //     {name: 'fullVaccinationAndBoosterDiff', value: props.data[6].fullVaccinationAndBoosterDiff},
    //     {name: 'firstAndSecondBoosterDiff', value: props.data[7].firstAndSecondBoosterDiff},
    // ];

    // console.log(dataList)

    console.log(props.data);

    const options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '10%',
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: [''],
            axisLine: {
                show: 'true',
                lineStyle: {
                    color: '#fafafa',
                    width: 1,
                    // cap: 'square'
                }
            },
        },
        series: [
            {
                name: 'secondBooster',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                color: 'red',
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
