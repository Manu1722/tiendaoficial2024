let cajaUsuario=document.getElementById("Usuario")
let cajaCorreo=document.getElementById("Correo")
let cajaContraseña=document.getElementById("Contraseña")

//VALIDANDO EL FORMULARIO
let boton=document.getElementById("boton")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    if(cajaUsuario.value=="" && cajaContraseña.value=="" && cajaCorreo.value==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Revisa,faltan campos por llenar!",
            
          });

    }else{
        Swal.fire({
            title: "Buen trabajo!",
            text: "Bienvenido, espera un momento!",
            icon: "success"
          });
        setTimeout(function(){
            window.location.href="./home.html"
         },5000)
    }
    
})
