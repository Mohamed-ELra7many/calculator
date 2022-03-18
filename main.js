let display = document.querySelector(".display")
let butns = document.querySelectorAll(".boutton")

butns.forEach((item) =>{
    item.addEventListener("click", (e)=>{
        switch(e.target.textContent){
            case "c":
                display.textContent = " "    //this is remove all number
                break;
                case "=":
                    try{
                        display.textContent = eval(display.textContent)     //If the operation was successful, it will execute it, and if it is an error, it will print an error
                    } catch{
                        display.textContent = "error";
                    }
                break;
            case "←":
                if(display.textContent){
                    display.textContent = display.textContent.slice(0, -1);   //this is remove one number
                }
                break;
            default:
            display.textContent += e.target.textContent;
        }
        
    })
})
