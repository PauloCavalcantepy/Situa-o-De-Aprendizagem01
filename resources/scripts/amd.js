import { GuardarUsuario } from "./class.js";

var usuarios = GuardarUsuario.getAll();

var tabela = document.querySelector("#listaUsuarios");

usuarios.forEach(usuario => {

    // Cria uma nova linha para cada usuário
    var linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.nome}</td>
        <td>${usuario.cpf}</td>
        <td>${usuario.email}</td>
    `;

    // Adiciona a linha na tabela
    tabela.appendChild(linha);
});