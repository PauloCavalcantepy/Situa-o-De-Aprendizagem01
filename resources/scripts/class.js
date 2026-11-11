
export class Admin {
    static emailAdm = "admin@gmail.com"
    static senhaAdm = "admin123"
}

export class Usuario {
    static nextId = 1;

    constructor(nome, cpf, email, senha) {
        this.id = Usuario.nextId++;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}

export class GuardarUsuario {
    static save(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    static getAll() {
        const data = localStorage.getItem("users");

        if (!data) return [];

        const users = JSON.parse(data);

        return users.map(user =>
            new Usuario(
                user.nome,
                user.cpf,
                user.email,
                user.senha,
                user.id
            )
        );
    }
    static add(user) {
        const users = this.getAll();

        users.push(user);

        this.save(users);
    }
    static exists(email, cpf) {
        const users = this.getAll();

        return users.some(user =>
            user.email.trim().toLowerCase() === email || user.cpf.trim().toLowerCase() === cpf
        );
    }
    
}
