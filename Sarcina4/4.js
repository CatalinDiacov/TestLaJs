function Function4() {
    if (document.getElementById("x").value>document.getElementById("y").value){
        document.getElementById("max").innerText=document.getElementById("x").value
    }
    if (document.getElementById("x").value<document.getElementById("y").value){
        document.getElementById("max").innerText=document.getElementById("y").value
    }
}