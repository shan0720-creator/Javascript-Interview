// Default export means, there will be one module per file
// In other words, you export one container which has many things inside it and you import that one module only
// Exporting one module, that means you are also dividing the functionality into various modules


export default function add2(a,b){
        return a+b;
}


// or export default sum
// export {sum as default}
// Named exports are explicit whereas Default exports yoy decide the name