({
    clickCreateItem : function (component,event,helper){
        if(helper.validateItemForm(component)){
            //CREATE A NEW ITEM
            var newItem = component.get("v.newItem");
            helper.createItem(component,newItem);
        }
    }
})
