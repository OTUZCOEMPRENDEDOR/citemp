function cerrarCesion(e){
    let elementoIngreso = document.getElementById("elementoIngreso");
    if (elementoIngreso != null && elementoIngreso.textContent == 'Cerrar sesión') {
        localStorage.setItem("login", "FALSE");
        e.preventDefault();
        window.location.href = "./robotica_proyecto.html";
    }
}

(function($) {
    'use strict';

    function dinamizarContenidoLogin(){
        let seccion1 = document.getElementById("seccion1")
        let seccion2 = document.getElementById("seccion2");
        let elementoIngreso = document.getElementById("elementoIngreso");
         
        let login = localStorage.getItem("login");
        if (login != null && login == "TRUE"){
            if (seccion1 != null){
                seccion1.style.display = "none";
            }
            if (seccion2 != null){
                seccion2.style.display = "block";
            }
            if (elementoIngreso != null) {
                elementoIngreso.textContent = "Cerrar sesión";
            }
        } else {
            if (seccion1 != null){
                seccion1.style.display = "block";
            }
            if (seccion2 != null){
                seccion2.style.display = "none";
            }
            if (elementoIngreso != null) {
                elementoIngreso.textContent = "Ingreso";
            }
        }
    }
    
    function login(){
        let loginForm = document.getElementById("loginForm");
        let comprarForm = document.getElementById("comprarForm");
        
        //Login
        if (loginForm != null) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
      
            let email = document.getElementById("email");
            let password = document.getElementById("password");
          
            if (email.value == "" || password.value == "") {
              alert("Debes completar todos los campos");
            } else {
                let savedEmail = localStorage.getItem("emailField");
                let savedPass = localStorage.getItem("passField");
                localStorage.setItem("login", "TRUE");
                
                if(savedEmail == email.value && savedPass == password.value){
                    window.location.href = "./robotica_curso_detalles.html";
                } else {
                    alert("No se encuentra usuario");
                }
                
                email.value = "";
                password.value = "";
            }
          });
        }
        
        //Comprar/Sign in
        if (comprarForm != null) {
            comprarForm.addEventListener("submit", (e) => {
                e.preventDefault();
        
                let primerNombreField = document.getElementById("primerNombreField");
                let segundoNombreField = document.getElementById("segundoNombreField");
                let emailField = document.getElementById("emailField");
                let celularField = document.getElementById("celularField");
                let passField = document.getElementById("passField");
                let yapeField = document.getElementById("yapeField");
                let tarjetaField = document.getElementById("tarjetaField");
            
                if (primerNombreField.value == "" || segundoNombreField.value == ""
                    || emailField.value == "" || celularField.value == "" || passField.value == ""
                    || (!yapeField.checked && !tarjetaField.checked)) {
                    alert("Debes completar todos los campos");
                } else {
                    localStorage.setItem("emailField", emailField.value);
                    localStorage.setItem("passField", passField.value);
                    
                    alert("Compra realizada con éxito");
                    
                    primerNombreField.value = "";
                    segundoNombreField.value = "";
                    emailField.value = "";
                    celularField.value = "";
                    passField.value = "";
                    window.location.href = "./robotica_curso_detalles.html";
                }
            });
        }
    }

    $(document).ready(function() {
        login();
        dinamizarContenidoLogin();
    });
})(jQuery);