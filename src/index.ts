let targetTime:number;
const timer =(targetTime:number)=>{
    let givenTime = setInterval(()=>{
        console.log(`${targetTime} seconds remaining!`);
        targetTime--;
        if(targetTime===0){
            clearInterval(givenTime);
            console.log("Timer has ended!")
        }
    }, 1000)
}

export {timer};