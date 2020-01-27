export class GetUsuarioRequest{
    usuarioId : number;
}

export class InsUsuarioRequest{
    correo : string;
}

export class UpdUsuarioRequest{
    usuarioId : number;
    nombres : string;
}