
// console.log("1")
// console.log("2")
// console.log("3")


// let myPromise = new Promise((resolve,reject)=>{
   
// setTimeout(()=>{

//     if(true){
    
//         resolve(console.log("Last") ,"Data recieved");
//     }else{
//         reject("Error from Server");
//     }

// }, 3000);

// });
// console.log("4")


let myPromise = new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
    
        if(true){        
            resolve("Data recieved from resolve");
        }else{
            reject("Error from Server");
        }
    
    }, 0);
    
    });

    myPromise.then((data) =>{
        console.log(data) ;
        return data.toUpperCase();
    }).then(data => console.log(data))
    // .catch((error) =>{
    //     console.log(error)
    // })
    .finally(() => {
            console.log("Data Finally ended up success");
        });
