import services from './services.js';
import { JetView } from "webix-jet";
import Chart from 'chart.js/auto';



export default class RoleForm extends JetView {
    config() {
        return {
            view: 'form',
            id: 'roleForm',
            name: 'roleForm',
            cols: [
                {
                    view: "dataview",
                    id: "table_view_employee",
                    css: "my_style",
                    width: 200, // component's dimensions
                    // height: 770,
                    xCount: 3,
                    template: `<img src='../../../img/#avatar#'> 
                                </br> <div class='webix_strong'>Mã nhân viên:  #manv# 
                                </br>Họ và tên:  #tenv#.</div>
                                Đã kích hoạt: #isuse# 
                                </br>ngày sinh: #birthday#`,
                    type: {  // dimensions of each dataview item
                        height: 300,
                        width: 250
                    },
                    on: {
                        onItemClick: function (id) {
                            var object = this.getItem(id);
                            services.show(object);
                        }
                    }

                },
                {
                    rows: [

                        {
                            cols: [
                                {
                                    view: "form",
                                    scroll: false,
                                    id: "form",
                                    width: 300,
                                    elements: [
                                        { view: "text", label: 'MANV', name: "manv", id: "manv", readonly: true },
                                        { view: "text", label: 'TENV', name: "tenv" },
                                        { view: "textarea", label: 'DIACHI', name: "diachi" },
                                        { view: "text", label: 'GMAIL', name: "gmail" },
                                        { view: "text", label: 'PHONE', name: "phone" },
                                        { view: "text", label: 'AVATAR', name: "avatar", id: "ava" },
                                        { view: "datepicker", label: 'BIRTHDAY', name: "birthday" },
                                        { view: "switch", name: "isuse", value: 1, label: "IS USE", id: "ISUSE" },
                                        {
                                            view: "combo",
                                            id: "ROLEID",
                                            name: "roleid",
                                            value: 1, // the initially selected one
                                            label: 'ROLE ID',
                                            options: [
                                                { "id": "Developer", "value": "Developer" },
                                                { "id": "Tester", "value": "Tester" },
                                                { "id": "Leader", "value": "Leader" },
                                                { "id": "DevOps", "value": "DevOps" },
                                                { "id": "Expert", "value": "Expert" },
                                                { "id": "Senior", "value": "Senior" },
                                            ],

                                        },
                                        {
                                            cols: [
                                                {
                                                    view: "button", label: 'delete', name: "delete", id: "delete",
                                                    on: {
                                                        onItemClick: function (id) {
                                                            var object = $$("form").getValues();
                                                            services.delete(object);
                                                        }
                                                    }
                                                },
                                                {
                                                    view: "button", label: 'clear', name: "new", id: "clear",
                                                    on: {
                                                        onItemClick: function () {
                                                            services.new();

                                                        }
                                                    }
                                                },
                                                {
                                                    view: "button", label: 'save', name: "save", id: "save",
                                                    on: {
                                                        onItemClick: function () {
                                                            var object = $$("form").getValues();
                                                            services.save(object);
                                                        }
                                                    }
                                                }

                                            ]
                                        }
                                    ]
                                },
                                {
                                    view: "form",
                                    rows: [
                                        {
                                            view: "uploader", value: "Upload file", id: "uploader",
                                            name: "files",
                                            link: "list1", upload: "https://docs.webix.com/samples/server/upload"
                                        },
                                        {
                                            view: "list",
                                            id: "list1",
                                            type: "uploader",
                                            autoheight: true,
                                            borderless: true
                                        },
                                        {
                                            view: "button", label: "Get Image", click: function () {
                                                var file_id = $$("uploader").files.getFirstId(); // getting the ID
                                                var avatar = $$("uploader").files.getItem(file_id).name; // getting properties
                                                var k = {
                                                    avatar: avatar
                                                }
                                                avatar = JSON.stringify(k);
                                                $$("image").parse(avatar);
                                                // $$("ava").data.value = k.avatar;
                                                $$("form").parse(avatar);
                                            }
                                        },
                                        {
                                            view: "dataview",
                                            id: "image",
                                            template: `<img src='../../../img/#avatar#'>`,
                                            height: 140,
                                            width: 250,
                                            align: "center,middle",
                                            scroll: false,
                                            type: {  // dimensions of each dataview item
                                                height: 300,
                                                width: 250
                                            },
                                        }
                                    ]
                                }
                            ]
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
                    ]
                }
            ]
        }
    }
    async init() {
        $$("ROLEID").setValue("Developer");
        await services.onload();
    }
}