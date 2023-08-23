import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsInt, IsDate, IsString, IsNumber, Matches } from 'class-validator';

export default class HistorialesDTO {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'id_historiales' })
    @IsInt()
    @IsDefined({ message: 'El id_historiales es obligatorio' })
    id_historiales: number;

    @Expose({ name: 'cantidad' })
    @IsNumber()
    @IsDefined({ message: 'El cantidad es obligatorio' })
    cantidad: number;

    @Expose({ name: 'id_bodega_origen' })
    @IsInt()
    @IsDefined({ message: 'El id_bodega_origen es obligatorio' })
    id_bodega_origen: number;

    @Expose({ name: 'id_bodega_destino' })
    @IsInt()
    @IsDefined({ message: 'El id_bodega_destino es obligatorio' })
    id_bodega_destino: number;

    @Expose({ name: 'id_inventario' })
    @IsInt()
    @IsDefined({ message: 'El id_inventario es obligatorio' })
    id_inventario: number;

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

    @Expose({ name: 'deleted_at' })
    @IsString()
    @IsDefined({ message: 'La deleted_at es obligatoria' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La deleted_at no tiene el formato correcto' })
    deleted_at: string;

    
    constructor(data: Partial<HistorialesDTO>) {
        Object.assign(this, data);
        this._id = 0;
        this.id_historiales = 0;
        this.cantidad = 0;
        this.id_bodega_origen = 0;
        this.id_bodega_destino = 0;
        this.id_inventario = 0;
        this.created_by = 0;
        this.update_by=0;
        this.created_at="";
        this.updated_at = '';
        this.deleted_at = '';
    }
}
