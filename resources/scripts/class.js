export class Admin {
   static emailAdm = "admin@gmail.com"
   static senhaAdm = "admin123"
}

export class Usuario {
    constructor(nome,cpf,email,senha) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.senha = senha
    }
}