import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsInt, IsDate, IsString, IsNumber, Matches } from 'class-validator';

export default class InventariosDTO {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'id_inventarios' })
    @IsInt()
    @IsDefined({ message: 'El id_inventarios es obligatorio' })
    id_inventarios: number;

    @Expose({ name: 'id_bodega' })
    @IsString()
    @IsDefined({ message: 'El id_bodega es obligatorio' })
    id_bodega: number;

    @Expose({ name: 'id_producto' })
    @IsInt()
    @IsDefined({ message: 'El id_producto es obligatorio' })
    id_producto: number;

    @Expose({ name: 'cantidad' })
    @IsInt()
    @IsDefined({ message: 'El cantidad es obligatorio' })
    cantidad: number;

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

    
    constructor(data: Partial<InventariosDTO>) {
        Object.assign(this, data);
        this._id = 0;
        this.id_inventarios = 0;
        this.id_bodega = 0;
        this.id_producto = 0;
        this.cantidad = 0;
        this.created_by = 0;
        this.update_by=0;
        this.created_at="";
        this.updated_at = '';
        this.deleted_at = '';
    }
}
