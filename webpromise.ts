const win = document.getElementById("win")!;
const lose = document.getElementById("lose")!;
const userReturn = document.getElementById("return")!;

const flipGame = () => {
    return new Promise((resolve,reject)=>{
        const result = Math.random();
            if(result >.5){
                resolve("You Win!");
                //DISPLAY WIN 
                win.style.display = "block";
                lose.style.display = "none";
            }else{
                //DISPLAY LOSE
                reject("Game Over!");
                lose.style.display = "block";
                win.style.display = "none";
                userReturn.innerText = ":(";
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

//PART 2
const fetchAdviceBy = async (id:number) =>{
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        const data = await response.json();
        userReturn.innerText = data.slip.advice;
    } catch (error) {
        console.log('Error fetching advice: ', error);
    }

}
                    
//Part 3
const getAdviceAfterGame = async () => {
    try {
        const result = await flipGame();
        console.log(result);
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const data = await response.json();
        userReturn.innerText = data.slip.advice;
    } catch (error) {
        console.log('Error: ', error)
    }
}

//ADD PROMISE TO EVENT LISTENER
document.getElementById("play")?.addEventListener("click", getAdviceAfterGame);
