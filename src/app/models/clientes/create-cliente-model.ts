export interface CreateClienteModel {
    nombre: string;
    apellidos: string;
    telefono:string;
    correoElectronico:string;
    password:string;
    activo?:boolean;
  }