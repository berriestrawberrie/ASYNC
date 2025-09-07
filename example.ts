const myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("Operation was successfull");
    }else{
        reject("Operation failed!");
    }
});
const result = async () =>{
    try {
        const value = await myPromise;
        console.log(value); 
    } catch (error) {
       console.log(error) ;
    }
}

result();

const fetchAdviceById = async (id:number) =>{
    try {
        const response = await fetch('https://api.adviceslip.com/advice/'+id)
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const advice = data.slip.advice;
        console.log(`Advice ID: ${id} : ${advice}`);
    } catch (error) {
        console.log(error);
    }
}
fetchAdviceById(1);

