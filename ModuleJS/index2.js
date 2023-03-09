function sum(a,b){
    return a+b;
}


function cube(a){
    return a*a*a;
}

export{sum,cube}; // sum as total - here now total is the name assignment (alias)
//Named Export/Import file
// Let me remind you that - to run import/export with HTML and Javascript you will need to configure a server, or if you upload on any live server - it will work
// There are two ways of using export and import for a module in javascript:
// 1.> Named Export/Import
// 2.> Default Export/Import