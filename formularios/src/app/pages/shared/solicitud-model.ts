export interface SolicitudModel {
    id: string,
    titulo: string,
    descripcion: string,
    categoria: string,
    prioridad: number,
    email: string,
    created_at: Date
}
