let asyncCallOne = async ()=>{
  
    let myPromise = new Promise((resolve,reject)=>{
   
        setTimeout(()=>{
        
            if(true){        
                resolve("Data recieved from asyncCallOne");
            }else{
                reject("Error from Server");
            }
        
        }, 2000);
        
        });
return await myPromise
}

let asyncCallTwo = async ()=>{
     
    let myPromise = new Promise((resolve,reject)=>{
   
        setTimeout(()=>{
        
            if(false){        
                resolve("Data recieved from asyncCallTwo");
            }else{
                reject("Error from AsyncCallTwo");
            }
        
        }, 2000);
        
        });
return await myPromise;
}

//expects to succeed both , other wise rejected and returns error

// Promise.all([asyncCallOne(), asyncCallTwo()]).then(response =>{
//     console.log(response);
// }).catch(error=>{
//     console.log(error);
// })

Promise.race([asyncCallOne(), asyncCallTwo()]).then(response =>{
    console.log(response);
}).catch(error=>{
    console.log(error);
})