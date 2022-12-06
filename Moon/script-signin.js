window.onload= function(){
    let email = document.getElementById("email")
    let senha= document.getElementById("senha")
    let enviar = document.getElementById("enviar").onclick =function validar(){
        if((email=="") ){
           console.log("Logou")
          
        }
    
        else{
            console.log("Erro")
            window.location.href = "index.html"
        }
       }
       console.log(enviar)
    
    }






