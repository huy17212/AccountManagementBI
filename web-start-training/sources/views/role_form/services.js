import axios from "axios";

var dataset;
var listRole;
var listRoleByRoleId;
var countvalue;

class services {

    findCount = async (tenRole) => {
        console.log(tenRole);


        try {
            var here = await listRoleByRoleId.find(items => items.TENROLE === tenRole);
            return here.COUNT;
        }
        catch (err) {
            return undefined;
        }


    }

    onload = async () => {
        listRole = await axios.get("http://localhost:8888/api/role/getAllRole");
        listRole = listRole.data;
        console.log(listRole);
        $$("datatable1").clearAll();
        $$("datatable1").parse(listRole);

        listRoleByRoleId = await axios.get("http://localhost:8888/api/role/getCountByRoleId");
        listRoleByRoleId = listRoleByRoleId.data;

        console.log(listRoleByRoleId);
        $$("barChartData").clearAll();
        $$("pieChartData").clearAll();
        $$("barChartData").parse(listRoleByRoleId);
        $$("pieChartData").parse(listRoleByRoleId);
        $$("form").parse(listRole[0]);
    }

    setDescending = async () => {
        listRoleByRoleId = listRoleByRoleId.sort((a, b) => b.COUNT - a.COUNT);
        $$("barChartData").clearAll();
        $$("barChartData").parse(listRoleByRoleId);
    }

    setAscending = async () => {
        listRoleByRoleId = listRoleByRoleId.sort((a, b) => a.COUNT - b.COUNT);
        $$("barChartData").clearAll();
        $$("barChartData").parse(listRoleByRoleId);
    }



    show = async (object) => {
        $$("form").parse(object);
        countvalue = await this.findCount(object.tenrole);
        if (countvalue == undefined) {
            $$("clear").setValue("Delete");
        } else {
            $$("clear").setValue("Clear");
        }
    }

    clear = async () => {
        $$("form").parse({ isuse: true });
    }

    delete = async (id) => {
        await axios.delete("http://localhost:8888/api/role/deleteRole?RoleId=" + id);
        this.onload();
    }

    save = async (object) => {
        if (object.roleid != "") {
            await axios.put("http://localhost:8888/api/role/updateRole", object);
        } else {
            object.roleid = listRole[listRole.length - 1].role + 1;
            await axios.post("http://localhost:8888/api/role/postNewRole", object);
        }
        this.onload();
    }



}
export default new services();