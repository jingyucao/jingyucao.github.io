import StatesDataMap from "./StatesDataMap";

export interface mapProps {
    data: any
}

const MapSetting = (props: mapProps) => {

    let dataList: any = [
        {name: 'SH', value: 0},
        {name: 'HH', value: 0},
        {name: 'NI', value: 0},
        {name: 'HB', value: 0},
        {name: 'NW', value: 0},
        {name: 'HE', value: 0},
        {name: 'RP', value: 0},
        {name: 'BW', value: 0},
        {name: 'BY', value: 0},
        {name: 'SL', value: 0},
        {name: 'BE', value: 0},
        {name: 'BB', value: 0},
        {name: 'MV', value: 0},
        {name: 'SN', value: 0},
        {name: 'ST', value: 0},
        {name: 'TH', value: 0}
    ];

    dataList = dataList.map((item: any) => {
        const result = props.data.find((e: any) => e.name === item.name);
        if (result) {
            item.state = result.state;
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

    const MapSetting = {
        tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
                return [params.data.state] + '<br/>Infection Rate: ' + [params.data.value.toFixed(2)] + '<br/>New Cases: ' + [params.data.confirmed] +
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
            min: 30000,
            max: 45000,
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
                    borderWidth: 1,
                    borderColor: '#F6F6F6',//边界线颜色
                },
                data: dataList,
            }
        ]
    }

    return (
        <StatesDataMap options={MapSetting}/>
    )
}

export default MapSetting;
