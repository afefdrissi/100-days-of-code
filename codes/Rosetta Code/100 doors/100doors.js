
function getFinalOpenedDoors1 (numDoors) {
    let doors={};
for ( let i=1;i<numDoors+1;i++){doors[i]="closed";}

    ///visiting the doors
for (var i=1;i<numDoors+1;i++){
    for (var j=i;j<numDoors+1;j+=i){
        if (doors[j]==="closed"){
            doors[j]="open";
                        }
        else {doors[j]="closed";}
}
}  
console.log(doors);
for (var door in doors){
    if (doors[door]==="closed"){
        delete doors[door];
    }
}
return Object.keys(doors).map(function(key) {
    return parseInt(key);});

  }

//////////////Divisors Way

function getFinalOpenedDoors2 (numDoors) {
    const numVists=100;
    var myArr=[];
    for (var i=1;i<=numDoors;i++){
        var divisors=0;
        for (var j=1;j<=i;j++){
            if (Number.isInteger(i/j) && j<=numVists){
                divisors++;
            }
        }
        if (!Number.isInteger(divisors/2)){
                myArr.push(i);
        }

    }

    return myArr;
}