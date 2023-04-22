webix.ui({
    width:600,
    view: "scrollview",
    scroll: "y",
    body: {
      rows:[
        {
          cols:[
            {
              rows:[
                {view:"button", value:"Unselect", click:function(){
                  $$("list1").unselectAll();
                }},
                {
                  view:"list",
                  id: "list1",
                  template:"#rank#. #title# <div style='padding-left:18px'> Year:#year#, votes:#votes# </div>",
                  type:{
                    height:60
                  },
                  select:true,
                  autowidth: true,
                  autoheight:true,
                  data:small_film_set
                },
              ]
            },
            {
              id: "form1",
              view:"form",
              elements:[
                { view:"text", name:"title", label:"Film Title"},
                { view:"text", name:"year", label:"Year"},
                { view:"text", name:"votes", label:"Votes"},
                { view:"text", name:"rank", label:"Rank"},
                { view:"button", label:"Save" , type:"form", click:save_form},
                { view:"button", label:"Clear", click:function(){
                  $$("form1").clear();
                }}
              ],
              rules:{
                title: webix.rules.isNotEmpty,
                year: webix.rules.isNumber,
                votes: webix.rules.isNotEmpty,
                rank: webix.rules.isNumber
              }
            }
          ]
        }
      ]
    }
  });
  
  $$("form1").bind($$("list1"));
  $$("list1").select(2);
  
  function save_form(){
    var form = $$('form1');
    if(form.isDirty()){
      if(!form.validate())
        return false;
      form.save();
    }
  };
  