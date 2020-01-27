export class GetEvaluacionRequest {
  evaluacionId: number;

  constructor() {}
}

export class GetListEvaluacionRequest {
  fechaInicio: Date;
  fechaFin: Date;

  constructor() {}
}

export class InsEvaluacionRequest {
  usuarioId: number;
  comentario: string;
  calificacion: number;

  constructor() {}
}

export class UpdEvaluacionRequest {
  evaluacionId: number;
  usuarioId: number;
  comentario: string;
  calificacion: number;

  constructor() {}
}
