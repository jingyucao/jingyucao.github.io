import {useEffect, useRef} from "react";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/geo';
import {MapChart} from 'echarts/charts';
import geoJson from "./germanymap.json";
import classes from './CovidData.module.css';

export interface chartProps {
    data: any
}

let echarts = require('echarts/lib/echarts');

echarts.use([MapChart]);
echarts.registerMap("germany", {geoJSON: geoJson});

const StatesDataMap = (props: chartProps) => {

    const chartRef = useRef(null) as any;
    let covidMapChart = null as any;

    let dataList: any = [
        {name: 'Schleswig-Holstein', value: 0},
        {name: 'Hamburg', value: 0},
        {name: 'Niedersachsen', value: 0},
        {name: 'Bremen', value: 0},
        {name: 'Nordrhein-Westfalen', value: 0},
        {name: 'Hessen', value: 0},
        {name: 'Rheinland-Pfalz', value: 0},
        {name: 'Baden-Württemberg', value: 0},
        {name: 'Bayern', value: 0},
        {name: 'Saarland', value: 0},
        {name: 'Berlin', value: 0},
        {name: 'Brandenburg', value: 0},
        {name: 'Mecklenburg-Vorpommern', value: 0},
        {name: 'Sachsen', value: 0},
        {name: 'Sachsen-Anhalt', value: 0},
        {name: 'Thüringen', value: 0}
    ];

    dataList = dataList.map((item: any) => {
        const result = props.data.find((e: any) => e.name === item.name);
        if (result) {
            item.value = result.casesPer100k;
            item.confirmed = result.confirmed;
            item.deaths = result.deaths;
            item.recovered = result.recovered;
            item.totalconfirmed = result.totalconfirmed;
            item.totaldeaths = result.totaldeaths;
            item.totalrecovered = result.totalrecovered;
            item.casesPerWeek = result.casesPerWeek;
            item.deathsPerWeek = result.deathsPerWeek;
        } else {
            item.value = 0;
        }
        return item
    });

    const options = {
        title: {
            text: 'COVID-19 infection rate in Germany in 2022, by federal state',
            subtext: 'Data from Robert Koch-Institut',
            sublink: 'https://www.rki.de/DE/Home/homepage_node.html',
            left: 'left',
            top: 10,
            textStyle: {
                fontFamily: '"Work Sans", sans-serif',
                fontSize: 18,
                fontWeight: 600,
                color: '#666'
            },
            subtextStyle: {
                fontFamily: '"Work Sans", sans-serif',
                fontSize: 14,
                fontWeight: 300
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
                return [params.name] + '<br/>Infection Rate: ' + [params.data.value.toFixed(2)] + '<br/>New Cases: ' + [params.data.confirmed] +
                    '<br/>New Deaths: ' + [params.data.deaths] +
                    '<br/>Total Cases: ' + [params.data.totalconfirmed] +
                    '<br/>Total Deaths: ' + [params.data.totaldeaths]
            },
            borderColor: '#666',
            textStyle: {
                fontFamily: '"Work Sans", Arial, sans-serif',
                fontSize: 10,
                fontWeight: 'bolder',
                color: '#666'
            }

        },
        visualMap: {
            min: 20000,
            max: 40000,
            realtime: true,
            calculable: true,
            color: ['#409ebd', '#e0f2c2'],
            left: 650,
            bottom: 60,
            align: 'left',
            orient: "vertical",
            textGap: 15,
            textStyle: {
                fontFamily: '"Work Sans",sans-serif',
                fontSize: 10,
                fontWeight: 'bold',
                color: '#666',
            },
        },
        series: [
            {
                name: 'Covid-19 Germany Map',
                type: 'map',
                map: 'germany',
                emphasis: {
                    show: false,
                    itemStyle: {
                        areaColor: "#B08401",
                        borderColor: '#666',
                    }
                },
                label: {
                    borderType: 'solid',
                    borderWidth: 1,
                    show: true,
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: 11,
                    fontWeight: '300',
                    color: '#666'
                },
                itemStyle: {
                    borderWidth: 1.5,
                    borderColor: '#F6F6F6',//边界线颜色
                },
                data: dataList,
            }
        ]
    }

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
        covidMapChart.setOption(options)
    };

    useEffect(() => {
        renderChart()
        return () => {
            covidMapChart && covidMapChart.dispose()
        }
    })

    return (
        <div className={classes.container}>
            <div className={classes.map} ref={chartRef} id='map'/>
        </div>
    )
}

export default StatesDataMap;
