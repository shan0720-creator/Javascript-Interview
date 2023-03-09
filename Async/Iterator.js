// Async iterators/Generators [Symbol.asyncIterator]
// asynciterator is about iterating through the data which is coming asynchronously or in chunks , on demand instead of getting it together
// It means you can use the "for await...of" loop instead of "for...of" loop
let obj  = {a:10,b:20,
  [Symbol.asyncIterator](){
    return {
      async next(){
            await new Promise(resolve=>setTimeout(resolve,1000));
            if(obj.a<obj.b){
                return {value:obj.a++, done:false}
            }else{
                return {done:true}
            }

           
        }
    }
  }}