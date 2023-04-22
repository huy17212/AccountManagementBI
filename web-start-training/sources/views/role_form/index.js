import services from './services.js';
import { JetView } from "webix-jet";

export default class RoleForm extends JetView {



    config() {
        return {
            view: 'form',
            id: 'roleForm',
            name: 'roleForm',
            rows: [
                {
                    cols: [
                        {
                            rows: [
                                {
                                    cols: [
                                        { label: 'TENV', name: "tenv", width: 100 },
                                        { id: "title", editor: "text", value: "Role ID", width: 100 },
                                        {
                                            view: "search",
                                            align: "center",
                                            placeholder: "Search By Rolename",
                                            id: "search",
                                            width: 400,
                                            on: {
                                                onChange: function () {
                                                    console.log(123);
                                                }
                                            }
                                        },
                                        { id: "end", editor: "popup", value: "Is Use", width: 120 },
                                    ]
                                },
                                {
                                    view: "datatable",
                                    id: "datatable1",
                                    headerRowHeight: 50,
                                    columns: [
                                        { id: "roleid", header: "RoleId", width: 100, name: "roleid" },
                                        { id: "tenrole", editor: "text", header: "Role Name", width: 100, name: "tenrole" },
                                        { id: "des", editor: "popup", header: "Description", width: 550, name: "des" },
                                        { id: "isuse", editor: "popup", header: "Is Use", width: 120, name: "isuse" },
                                    ],
                                    width: 900,
                                    height: 450,
                                    on: {
                                        onItemClick: function (id) {
                                            var object = this.getItem(id);
                                            services.show(object);
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            cols: [

                                {
                                    view: "form",
                                    id: "form",
                                    scroll: true,
                                    elements: [
                                        { view: "text", name: "roleid", label: "Role Id", id:"roleid", readonly: true},
                                        { view: "text", name: "tenrole", label: "Role Name", id:"tenrole"},
                                        { view: "textarea", name: "des", label: "Des", id:"des" },
                                        { view: "switch", name: "isuse", value: 1, label: "Is use", id: "ISUSE" },
                                        {
                                            cols: [
                                                {
                                                    view: "button", value: "Save",

                                                    on: {
                                                        onItemClick: function (id) {
                                                            var object = $$("form").getValues();
                                                            services.save(object)
                                                        }
                                                    }
                                                },
                                                {
                                                    view: "button", value: "Clear", id:"clear",
                                                    on: {
                                                        onItemClick: function (id) {
                                                            var object = $$("form").getValues();
                                                            if(this.getValue() == "Clear"){
                                                                console.log(123);
                                                                services.clear();
                                                            }else{
                                                                console.log(456);
                                                                services.delete(object.roleid);
                                                            }
                                                            
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    width: 450
                                }
                            ]

                        }
                    ]
                },
                {
                    cols: [
                        {
                            rows: [
                                {
                                    view: "chart",
                                    type: "bar",
                                    id: "barChartData",
                                    value: "#COUNT#",
                                    label: '#COUNT#',
                                    barWidth: 35,
                                    radius: 0,
                                    gradient: "falling",
                                    xAxis: {
                                        template: "'#TENROLE#"
                                    },
                                    yAxis: {
                                        start: 0,
                                        end: 20,
                                        step: 2,
                                        template: function (obj) {
                                            return obj % 2 ? "" : obj;
                                        }
                                    },
                                    width: 900
                                },
                                {
                                    cols: [
                                        {
                                            view: "button", name: "roleid", label: "Descending",
                                            on: {
                                                onItemClick: function () {
                                                    services.setDescending();
                                                }
                                            }
                                        },
                                        {
                                            view: "button", name: "rolename", label: "Ascending",
                                            on: {
                                                onItemClick: function () {
                                                    services.setAscending();
                                                }
                                            }
                                        },
                                    ]
                                }
                            ]

                        },
                        {
                            view: "chart",
                            type: "pie",
                            id: "pieChartData",
                            value: "#COUNT#",
                            label: '#TENROLE#',
                            barWidth: 35,
                            radius: 0,
                            gradient: "falling",
                            pieInnerText: "#COUNT#",
                            xAxis: {
                                template: "'#TENROLE#"
                            }
                        }
                    ]
                }
            ],
            width: 1400,
            height: 800
        }

    }
    async init() {
        await services.onload();
    }
}