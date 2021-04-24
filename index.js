//function myFunction(){
//    console.log("Hello World")
//}
//myFunction()
window.onload = () => {
    const btn = document.getElementById("btn")
    console.log(btn)
    btn.innerHTML = "World"
    btn.style = "color: white"
    let blue= true
    btn.onclick = () => {
        if (blue == true){
            console.log("colour will now be green")
            btn.style = "background-color : green; color: white"
            blue= false
        }
        else{
            console.log("colour will now be blue")
            btn.style = "background-color : blue; color: white"
            blue = true
        }

    }
    
    
    
}
