import axios from "axios";
import swal from 'sweetalert';


class services {

    constructor(brand) {  // Constructor
        this.carname = brand;
      }


    // onload = async () => {
    //     result = await axios.get("http://localhost:8888/api/employee/getEmployee");
    //     data_role = await axios.get("http://localhost:8888/api/role/getAllRole");
    //     month = await axios.get("http://localhost:8888/api/util/getMonthEmployee");

    //     allTheMonth = [
    //         {
    //             nameMonth: "Jan",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Feb",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Mar",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Apr",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "May",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Jun",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Jul",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Aug",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Sep",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Oct",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Nov",
    //             amount: 0
    //         },
    //         {
    //             nameMonth: "Dec",
    //             amount: 0
    //         }
    //     ];

    //     month.data.map((item) => {
    //         allTheMonth[item.month - 1].amount = item.amount;
    //     });

    //     console.log(allTheMonth);


    //     $$("table_view_employee").clearAll();
    //     $$("pieChartData").clearAll();

    //     $$("table_view_employee").parse(result.data);
    //     $$("pieChartData").parse(allTheMonth);
    //     // $$("pieChartData").data = this.dataset;
    //     // console.log($$("pieChartData").data);
    //     // $$("pieChartData").update()
    //     // $$("form").elements["manv"].config.readonly = true;
    //     // $$("form").elements["manv"].refresh();
    // }

    // new = () => {
    //     var object = {};
    //     $$("form").parse(object);
    //     $$("ROLEID").setValue("Developer");
    //     $$("ISUSE").setValue(true);
    //     $$("image").clearAll();
    //     // $$("form").elements["manv"].config.readonly = false;
    //     // $$("form").elements["manv"].refresh();
    //     swal("Clear successful", "Well done", "success");
    // }

    // show = (object) => {
    //     $$("form").parse(object);
    //     var roleName;

    //     for (var i = 0; i < data_role.data.length; i++) {
    //         if (data_role.data[i].roleid === object.roleid) {
    //             roleName = data_role.data[i].tenrole;
    //         }
    //     }
    //     $$("ROLEID").setValue(roleName);
    //     $$("ISUSE").setValue(object.isuse);
    //     $$("image").clearAll();
    //     $$("image").parse(object);
    //     // $$("form").elements["manv"].config.readonly = true;
    //     // $$("form").elements["manv"].refresh();
    // }

    // save = async (object) => {

    //     console.log(object);

    //     for (var i = 0; i < data_role.data.length; i++) {
    //         if (data_role.data[i].tenrole === object.roleid) {
    //             object.roleid = data_role.data[i].roleid;
    //         }
    //     }

    //     if (object.manv == "") {
    //         object.manv = result.data[result.data.length - 1].manv + 1;
    //         var sign = await axios.post("http://localhost:8888/api/employee/saveEmployee", object);
    //     } else {
    //         var sign = await axios.put("http://localhost:8888/api/employee/updateEmployee", object);
    //     }
    //     if (sign.data.success == true) {
    //         this.onload();
    //         this.new();
    //         swal("Insert successful", "Well done", "success");
    //     }
    // }


    // delete = async (object) => {
    //     var sign = await axios.delete("http://localhost:8888/api/employee/deleteEmployee?id=" + object.manv).
    //         then(response => element.innerHTML = 'Delete successful')
    //         .catch(error => {
    //             console.error('There was an error!', error);
    //         });;
    //         swal("Delete successful", "Well done", "success");
    //         this.new();
    //         this.onload();
    // }

    exportToExcel = async () => {
        var constraint1 = $$("roleid").getValue();
        var constraint = $$("username").getValue();
        const myArray = constraint1.split("-");
        await axios({
            method:       'GET',
            url:          `http://localhost:8888/api/user/exportToExcel?username=${constraint}&listContraint=${myArray}`,
            //params:       {tenKh: $$('tenKh').getValue(), lstRoleId: $$('roleId').getValue()},
            responseType: 'blob',
            headers:      { 'Content-Type': 'blob' }
          }).then(function (response) {
            let blob = new Blob([response.data], { type: 'application/pdf' });
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'ListKhachHang.xlsx';
            link.click();
          });
    }

    
    search = async () => {
        var constraint1 = $$("roleid").getValue();
        var constraint = $$("username").getValue();

        const myArray = constraint1.split("-");

        var k = await axios.get(`http://localhost:8888/api/user/getByContraint?username=${constraint}&listContraint=${myArray}`);
        $$("datatable1").clearAll();
        $$("datatable1").parse(k);
    }



}
export default new services();