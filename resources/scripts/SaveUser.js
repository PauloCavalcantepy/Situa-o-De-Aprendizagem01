export class SaveUser{
    constructor(usuario = {}){
        this.nome = usuario.nome;
        this.cpf = usuario.cpf;
        this.email = usuario.email;
        this.senha = usuario.senha;

    }
    store(){
        
        localStorage.setItem("nome",this.nome);
        localStorage.setItem("cpf",this.cpf);
        localStorage.setItem("email",this.email);
        localStorage.setItem("senha",this.senha)
        
    }


}