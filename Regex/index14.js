// exec method matches and retruns 
let str = "this is how it is";
let ptrn = /is/g;
while(result!=null){
    console.log("lastIndex :"+ ptrn.lastIndex);
    result= ptrn.exec(str);
    console.log(result)
}
// lastIndex is a kind of property that is not only read only property
// lastIndex property is also used to decide from which position the search should begin
// like you can set value as ptrn.lastIndex = 4;
// I want that search should begin from index = 4
