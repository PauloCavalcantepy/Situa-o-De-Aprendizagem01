import { Admin, Usuario } from "./class.js";

let emailForm = document.querySelector("#email")
let senhaForm = document.querySelector("#password")

function verificar(){
    let verifiEmail = emailForm.value
    let verifiSenha = senhaForm.value

    if(verifiEmail === Admin.emailAdm && verifiSenha === Admin.senhaAdm){
        return console.log("Adm")
    }
    else if( verifiEmail === Usuario.emailUser && verifiSenha === Usuario.senhaUser){
        return console.log("Usuario de drogas")
    }
}
let form = document.querySelector("#formularioLogin")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    verificar(emailForm, senhaForm)
})
