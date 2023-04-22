

export default class SearchComponent {
    isOpened = false;

    constructor(id, des) {
        this._des = des;
        this._id = id;
        console.log(this._des);
    }

    setChangeValue = async () => {
        var statusDeveloper = $$("statusDeveloper").getValue();
        var statusTester = $$("statusTester").getValue();
        var statusDevOps = $$("statusDevOps").getValue();
        var statusLeader = $$("statusLeader").getValue();
        var statusExpert = $$("statusExpert").getValue();
        var statusSenior = $$("statusSenior").getValue();

        var list = [statusDeveloper, statusTester, statusDevOps, statusLeader, statusExpert, statusSenior];
        var springfinal = "";
        for (var index = 0; index < list.length; index++) {
            if (list[index] == "") {

            } else {
                springfinal = springfinal + list[index] + "-"
            }

        }
        springfinal = springfinal.substring(0, springfinal.length - 1);
        // if (springfinal != "") {
        //     springfinal = "[" + springfinal + "]";
        // }
        this._des.setValue(springfinal);
    }


    layout = () => ({
        view: "window",
        id: this._id,
        maxWidth: 800,
        maxHeight: 650,
        modal: true,
        width: this._popup_width,
        height: this._popup_height,
        position: 'center',
        move: true,
        resize: true,
        head: {
            view: 'toolbar',
            cols: [
                { width: 5 },
                { view: 'label', label: "About Us" },
                {
                    view: 'button',
                    width: 30,
                    align: 'right',
                    hotkey: 'esc',
                    type: 'image',
                    image: 'img/icon/close.png',
                    click: () => {
                        $$(this._id).hide();
                        this.setChangeValue();
                    }
                }
            ]
        },
        body: {
            cols: [
                {
                    id: "logoAboutUs",
                    template: function (obj) {
                        return `
                       <div class='box-upload-image'>
                         <img class="img-backgroundLogin" alt="" src='/img/iconLogo.jpg'>
                       </div>`;
                    }
                },
                {
                    rows: [
                        {
                            cols: [
                                {
                                    rows: [
                                        {
                                            view: "form", scroll: false, width: 300, elements: [
                                                {
                                                    view: "checkbox", label: "Developer", id: "statusDeveloper",
                                                    uncheckValue: "", checkValue: "1"
                                                },
                                                {
                                                    view: "checkbox", label: "Tester", id: "statusTester",
                                                    uncheckValue: "", checkValue: "2",
                                                },
                                                {
                                                    view: "checkbox",
                                                    label: "DevOps",
                                                    id: "statusDevOps",
                                                    uncheckValue: "", checkValue: "4",
                                                },
                                                {
                                                    view: "checkbox", label: "Leader", id: "statusLeader",
                                                    uncheckValue: "", checkValue: "3",
                                                },
                                                {
                                                    view: "checkbox", label: "Expert", id: "statusExpert",
                                                    uncheckValue: "", checkValue: "5",
                                                },
                                                {
                                                    view: "checkbox", label: "Senior", id: "statusSenior",
                                                    uncheckValue: "", checkValue: "0",
                                                }
                                            ]
                                        }
                                    ],
                                    height: 600
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    });




    drawPopup = () => {
        webix.ui(
            this.layout()
        );
        webix.extend($$(this._id), webix.ProgressBar);
    }

    showWindow() {
        if (!this.isOpened) {
            this.drawPopup();
            this.isOpened = true;
        };
        $$(this._id).show();

    };
}