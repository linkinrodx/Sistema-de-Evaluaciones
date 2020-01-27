export class UsuarioResponse{
    usuarioId : number;
    correo: string;
    nombres : string;

    constructor(user) {
        this.usuarioId = user.usuarioId;
        this.correo = user.correo;
        this.nombres = user.nombres;
    }
}