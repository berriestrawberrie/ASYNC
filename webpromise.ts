//const win = document.getElementById("win")!;
//const lose = document.getElementById("lose")!;
//const userReturn = document.getElementById("return")!;

const flipGame = () => {
    return new Promise((resolve,reject)=>{
        const result = Math.random();
            if(result >.5){
                resolve("You Win!");
                //DISPLAY WIN 
                //win.style.display = "block";
                //lose.style.display = "none";
            }else{
                //DISPLAY LOSE
                reject("Game Over!");
                //lose.style.display = "block";
                //win.style.display = "none";
                //userReturn.innerText = ":(";
            }
    });
}

const playGame = async () => {
    try {
        const result =  await flipGame();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

type AdviceResponse = {
    slip:{
        id:number;
        advice:string;
    }
}

//PART 2
const fetchAdviceBy = async (id:number) =>{
    try {
        const response: Response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        const data: AdviceResponse = await response.json();
        const advice: string = data.slip.advice;
        //UPDATE THE WEBPAGE DIV
        //userReturn.innerText = advice;
        console.log(advice);
    } catch (error:unknown) {
        console.log('Error fetching advice: ', error);
    }

}
                    
//Part 3
const getAdviceAfterGame = async () => {
    try {
        const result = await flipGame();
        console.log(result);
        const response: Response = await fetch(`https://api.adviceslip.com/advice`);
        const data:AdviceResponse = await response.json();
        const advice: string = data.slip.advice;
        //UPDATE THE WEBPAGE DIV
       // userReturn.innerText = advice;
        console.log(advice);
    } catch (error:unknown) {
        console.log('Error: ', error)
    }
}

//ADD PROMISE TO EVENT LISTENER
//document.getElementById("play")?.addEventListener("click", getAdviceAfterGame);
getAdviceAfterGame();