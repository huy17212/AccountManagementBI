import services from './services.js';
import { JetView } from "webix-jet";


export default class autoGenchart extends JetView {



    config() {

        return {
            view: 'form',
            id: 'roleForm',
            name: 'roleForm',
            cols: [
                {
                    view: "scrollview",
                    scroll: "y",
                    body: {
                        width: 400, type: "space", rows: [
                            { template: "JustGage Chart", type: "header" },
                            {
                                view: "justgage-chart",
                                value: 25,
                                id: "gage1",
                                title: "Positive",
                                height: 300,
                            }, {
                                view: "resizer"
                            }, {
                                view: "justgage-chart",
                                value: 75,
                                id: "gage2",
                                title: "Negative",
                            }]
                    }
                },
                {
                    type: "space", rows: [
                        { template: "Highchart", type: "header" },
                        {
                            id: "hchart", view: "highchart",
                            modules: ["series-label", "exporting", "export-data"],
                            settings: {
                                title: {
                                    text: 'Highcharts with Webix: Solar Employment Growth by Sector, 2010-2016'
                                },
                                subtitle: {
                                    text: 'Source: thesolarfoundation.com'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Number of Employees'
                                    }
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'right',
                                    verticalAlign: 'middle'
                                },
                                plotOptions: {
                                    series: {
                                        label: {
                                            connectorAllowed: false
                                        },
                                        pointStart: 2010
                                    }
                                },
                                series: [{
                                    name: 'Installation',
                                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                                }, {
                                    name: 'Manufacturing',
                                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                                }, {
                                    name: 'Sales & Distribution',
                                    id: 'SalesDistribution',
                                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                                }, {
                                    name: 'Project Development',
                                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                                }, {
                                    name: 'Other',
                                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                                }
                                ]
                            }
                        }
                    ]
                }
            ],
            width: 1400,
            height: 800,
            type: "space"

        }

    }
    async init() {
        setInterval(function () {
            var value = Math.floor(Math.random() * 100) + 1;
            $$('gage1').setValue(value);
            $$('gage2').setValue(100 - value);
            
            $$('SalesDistribution').parse(value);



            



        }, 1000);
    }
}