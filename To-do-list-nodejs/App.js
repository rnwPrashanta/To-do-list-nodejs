import { log } from "console";
import {createInterface} from "readline";

const rl=createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos =[]

const showMenu=()=>{
    console.log("\n1:Add a task");
    console.log("2: View tasks");
    console.log("3:Exit todo");
    rl.question("choose the option:" , handleInput)
}

const handleInput=(option)=>{
    if(option==="1"){
        rl.question("Add the task",(task)=>{
            todos.push(task)
            console.log("task added");
            showMenu()
            
        })
    } else if (option ==="2"){
        console.log("\In your todo list");
        todos.forEach((task,index)=>{
            console.log(`${index+1}.${task}`);
            
        })
        showMenu()
    }else if(option==="3"){
        console.log("good bye");
        rl.close()
    }else{
        console.log("invalid option.plz try again");
        showMenu()
        
    }
}

showMenu()