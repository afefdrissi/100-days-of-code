

var inventory={
            items:{"size":12,"Blue Healing Capsule":4,"Red Healing Capsule":12,"Moon card":2,"curry":1},
            stuff:{"size":12,"Spell paper":6,"Fur":3},
            quest:{"size":12,"Letter to Po":1,"Torch":5}};
var inventoryElement={"id":"","name":"","availableTo":"","type":""};
console.log(inventory);
console.log(inventory["items"]["size"]);




function chekInventoryTypeSpace(type){
    var space=(inventory[type]["size"])-(Object.keys(inventory[type]).length)+1;
    return space ;
}
console.log(chekInventoryTypeSpace("stuff"))

function addElementToInventory(elementToBeAdded,number){
var elementType=elementToBeAdded["type"];
if (chekInventoryTypeSpace(elementType)!==0){
    var elementName=elementToBeAdded["name"];
    inventory[elementType][elementName]=number;
}

}
var elementToBeAdded={"name":"ruby gem","type":"stuff"};

addElementToInventory(elementToBeAdded,3);
console.log(inventory);