import services from './services.js';
import { JetView } from "webix-jet";
import SearchComponent from "../SearchComponent";

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
                                { view: "label", name: "roleid", label: "Username" },
                                { view: "search", name: "roleid", icon: null, placeholder: "Username", id: "username" },
                                {
                                    cols: [
                                        {
                                            rows: [
                                                { view: "label", name: "roleid", label: "Role Id" },
                                                { view: "search", name: "roleid_spake", value: "", id: "roleid", icon: null, placeholder: "Role ID", readonly: true },
                                            ]
                                        },
                                        {
                                            rows: [

                                                { view: "label", name: "roleid", label: "" },
                                                {
                                                    view: "icon",
                                                    name: "roleid",
                                                    label: "Search",
                                                    icon: "wxi-pencil",
                                                    click: async () => {
                                                        await this.SearchComponent.showWindow();
                                                    }
                                                }
                                            ]
                                        },


                                    ]
                                },
                                {
                                    rows: [
                                        {
                                            cols: [
                                                {},
                                                {
                                                    view: "button", name: "roleid", label: "Export",
                                                    on: {
                                                        onItemClick: function () {
                                                            services.exportToExcel();
                                                        }
                                                    }
                                                },
                                                {
                                                    view: "button", name: "roleid", label: "Import",
                                                    on: {
                                                        onItemClick: function () {
                                                            services.exportToExcel();
                                                        }
                                                    }
                                                },
                                                {
                                                    view: "button", name: "roleid", label: "Search",
                                                    on: {
                                                        onItemClick: function () {
                                                            services.search();
                                                        }
                                                    }
                                                },
                                                {
                                                    view: "button", name: "roleid", label: "Clear",
                                                    on: {
                                                        onItemClick: function () {
                                                            services.clear();
                                                        }
                                                    }

                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],

                        },
                        {
                            view: "chart",
                            type: "bar",
                            id: "pieChartData1",
                            value: "#amount#",
                            label: '#amount#',
                            barWidth: 35,
                            radius: 0,
                            gradient: "falling",
                            xAxis: {
                                template: "'#nameMonth#"
                            },
                            yAxis: {
                                start: 0,
                                end: 20,
                                step: 2,
                                template: function (obj) {
                                    return obj % 2 ? "" : obj;
                                }
                            },
                            data: services.dataset
                        },
                        {
                            view: "chart",
                            type: "bar",
                            id: "pieChartData",
                            value: "#amount#",
                            label: '#amount#',
                            barWidth: 35,
                            radius: 0,
                            gradient: "falling",
                            xAxis: {
                                template: "'#nameMonth#"
                            },
                            yAxis: {
                                start: 0,
                                end: 20,
                                step: 2,
                                template: function (obj) {
                                    return obj % 2 ? "" : obj;
                                }
                            },
                            data: services.dataset
                        }
                    ],
                    height: 240,
                    type: "space"
                },
                {
                    cols: [
                        { label: 'TENV', name: "tenv", width: 50 },
                        { label: 'TENV', name: "tenv", width: 100 },
                        {
                            view: "search",
                            align: "center",
                            width: 500,
                            icon: null
                        },
                        {
                            view: "search",
                            align: "center",
                            width: 100,
                            icon: null
                        },
                        { id: "end", editor: "popup", value: "Is Use", width: 120 },
                    ]
                },
                {
                    view: "datatable",
                    id: "datatable1",
                    headerRowHeight: 50,
                    columns: [
                        { id: "1", header: "STT", width: 50 },
                        { id: "roleid", editor: "text", header: "Mã", width: 100 },
                        { id: "username", editor: "popup", header: "Tên Khách Hàng", width: 500 },
                        { id: "userid", editor: "popup", header: "Vai Trò", width: 120 },
                        { id: "email", editor: "text", header: "Mail", width: 180 },
                        { id: "numberphone", editor: "text", header: "SDT", width: 200 },
                        { id: "birthday", editor: "text", header: "Ngày Sinh", width: 200 },
                    ],
                    width: 900,
                    height: 450
                }

            ],
            width: 1400,
            height: 770,
            type: "space"
        }


    }
    async init() {
        var des = this.$$("roleid");
        this.SearchComponent = await new SearchComponent("Contraint Arngument", des);
        // services.onload();
    }
}