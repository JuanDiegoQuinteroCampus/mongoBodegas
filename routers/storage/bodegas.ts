import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsInt, IsDate, IsString, IsNumber, Matches, IsOptional } from 'class-validator';

export default class BodegasDTO {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    /* @Expose({ name: 'id_bodegas' })
    @IsInt()
    @IsDefined({ message: 'El id_bodegas es obligatorio' })
    id_bodegas: number; */

    @Expose({ name: 'nombre' })
    @IsString()
    @IsDefined({ message: 'El nombre es obligatorio' })
    nombre: string;

    @Expose({ name: 'id_responsable' })
    @IsInt()
    @IsDefined({ message: 'El id_responsable es obligatorio' })
    id_responsable: number;

    @Expose({ name: 'estado' })
    @IsInt()
    @IsDefined({ message: 'El estado es obligatorio' })
    estado: number;

    @Expose({ name: 'created_by' })
    @IsInt()
    @IsDefined({ message: 'El created_by es obligatorio' })
    created_by: number;

    @Expose({ name: 'update_by' })
    @IsInt()
    @IsDefined({ message: 'El update_by es obligatorio' })
    update_by: number;

    @Expose({ name: 'created_at' })
    @IsString()
    @IsDefined({ message: 'La created_at es obligatoria' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La created_at no tiene el formato correcto' })
    created_at: string;

    @Expose({ name: 'updated_at' })
    @IsString()
    @IsDefined({ message: 'La updated_at es obligatoria' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La updated_at no tiene el formato correcto' })
    updated_at: string;

   /*  @Expose({ name: 'deleted_at' })
    @Transform(({ value }) => {
        if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return value;  // Si es un string en formato de fecha, mantenlo como está
        }
        return null;  // Si no es un string en formato de fecha, conviértelo en nulo
    })
    @IsOptional()
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La deleted_at no tiene el formato correcto' })
    deleted_at: string | null; */
    @Expose({ name: 'deleted_at' })
    @Transform(({ value }) => {
        if (value === null || (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value))) {
            return value;  // Si es null o un string en formato de fecha, mantenlo como está
        }
        /* throw new Error('La deleted_at debe ser null o tener el formato de fecha correcto'); */
        return { message: () =>  { throw { status: 400, message: "La deleted_at debe ser null o tener el formato de fecha correcto, AAAA-MM-DD"}}}
    })
    @IsOptional()
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: () =>  { throw { status: 400, message: "La deleted_at debe ser null o tener el formato de fecha correcto, AAAA-MM-DD"}}})
    deleted_at: string | null;
    
    constructor(data: Partial<BodegasDTO>) {
        Object.assign(this, data);
        this._id = 0;
        // this.id_bodegas = 0;
        this.nombre = '';
        this.id_responsable = 0;
        this.estado = 0;
        this.created_by = 0;
        this.update_by=0;
        this.created_at="";
        this.updated_at = "";
        this.deleted_at = null;
    }
}
