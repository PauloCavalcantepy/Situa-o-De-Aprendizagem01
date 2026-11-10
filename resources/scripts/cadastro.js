import {Usuario} from "./class.js"
import { SaveUser } from "./SaveUser.js"

let form = document.querySelector("#formularioCadastro")
let emailInput = document.querySelector("#email")
let nomeInput = document.querySelector("#nome")
let cpfInput = document.querySelector("#CPF")
let senhaInput = document.querySelector("#password")

form.addEventListener("submit", (e) => {
    e.preventDefault()
 let email = emailInput.value;
 let nome = nomeInput.value;
 let cpf = cpfInput.value;
 let senha = senhaInput.value;

 let user = new Usuario(nome,cpf,email,senha)
 
 let novoUsuario = new SaveUser(user);
 novoUsuario.store();
 
})