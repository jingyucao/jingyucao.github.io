import {useEffect, useRef} from "react";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/line';
import {MapChart} from 'echarts/charts';
import geoJson from "./germanymap.json";

interface chartProps {
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

    dataList = dataList.map((item: any, index: any) => {
        const result = props.data.find((e: any) => e.name === item.name);
        if (result) {
            item.value = result.confirmed;
            item.deaths = result.deaths;
            item.recovered = result.recovered;
            item.totalconfirmed = result.totalconfirmed;
            item.totaldeaths = result.totaldeaths;
            item.totalrecovered = result.totalrecovered;
            item.casesPer100k = result.casesPer100k;
            item.casesPerWeek = result.casesPerWeek;
            item.deathsPerWeek = result.deathsPerWeek;
        } else {
            item.value = 0;
        }
        return item
    });

    console.log(dataList)

    const options = {
        title: {
            sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
            left: 'center',
            top: 'top'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params:any) {
                return [params.name] + '<br/>Neue Fälle: ' + [params.data.value] +
                    '<br/>Neue Todesfälle: ' + [params.data.deaths] +
                    '<br/>Fälle gesamt: ' + [params.data.totalconfirmed] +
                    '<br/>Todesfälle gesamt: ' + [params.data.totaldeaths]
            },
            textStyle: {
                fontFamily: 'Helvetica',
                fontSize: 10,
                fontWeight: 'bold',
                color: '#fff'
            },
        },
        visualMap: {
            min: 0,
            max: 5000,
            realtime: true,
            calculable: true,
            color: ['#BF3B3B', '#FFCCCC'],
            left: 30,
            bottom: 58,
            align: 'left',
            orient: "vertical",
            textGap: 15,
            textStyle: {
                fontFamily: 'Helvetica',
                fontSize: 10,
                fontWeight: 'bold',
                color: '#8C8C8C',
            },

        },
        geo: {
            show: true,
            map: 'germany',
            label: {
                show: false
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#000',
                },
                emphasis: {
                    show: false,
                }
            }
        },
        series: [
            {
                name: 'Covid-19 Germany Map',
                type: 'map',
                map: 'germany',
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#000',
                        borderType: 'solid',
                        borderWidth: 1,
                        borderColor: '#F2F2F2',
                        label: {
                            show: true,  //显示省份名称
                            textStyle: {
                                fontFamily: 'Helvetica',
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: '#F2F2F2'
                            }
                        }
                    },
                    emphasis: {
                        show: false,
                    }
                },
                data: dataList,
            }
        ]
    }

    const renderChart = () => {
        const chart = echarts.getInstanceByDom(chartRef.current)
        if (chart) {
            covidMapChart = chart
        } else {
            covidMapChart = echarts.init(chartRef.current)
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

        <div style={{height: '700px', width: '700px'}} ref={chartRef}/>

    )
}

export default StatesDataMap;
