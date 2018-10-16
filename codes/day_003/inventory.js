

var inventory={
            items:{"size":9,"Blue Healing Capsule":4,"Red Healing Capsule":12,"Moon card":2,"curry":1},
            stuff:{"size":12,"Spell paper":6,"Fur":3,"Fur":6},
            quest:{"size":12,"Letter to Po":1,"Torch":5}};
var inventoryElement={"id":"","name":"","availableTo":"","type":""};
console.log(inventory);
console.log(inventory["items"]["size"]);

function loadInventory(){
    for (var inventoryType in inventory) {
    for (let i=0;i<inventory[inventoryType]["size"];i++){
        $("#"+inventoryType).append("<li class='empty'></li>");

    }
    for ( var element in inventory[inventoryType]){
        if (element!=="size"){
            $("#"+inventoryType+' li.empty:first').append(element).removeClass('empty');
        }   
    }
    
    console.log(inventoryType);
  }
} 
loadInventory();



function chekInventoryTypeSpace(type){
    var space=(inventory[type]["size"])-(Object.keys(inventory[type]).length)+1;
    return space ;
}
console.log(chekInventoryTypeSpace("stuff"))

function addElementToInventory(elementToBeAdded,number){
var elementType=elementToBeAdded["type"];
if (chekInventoryTypeSpace(elementType)>0){
    var elementName=elementToBeAdded["name"];
   
    if(!inventory[elementType][elementName]){ 
        inventory[elementType][elementName]=0;}
    inventory[elementType][elementName]+=number;
    $("#"+elementType+' li.empty:first').append(elementName).removeClass('empty');

    
}

    console.log(inventory);

    

}
var elementToBeAdded={"name":"ruby gem","type":"stuff"};


console.log(inventory);

