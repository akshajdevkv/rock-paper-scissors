function getComputerChoice(){
    let  choice =  Math.floor(Math.random()*3);
    if (!choice){
        return "rock";
    }else if (choice ==1){
        return "paper";
    }else{
        return "scissors"
    }
}
 