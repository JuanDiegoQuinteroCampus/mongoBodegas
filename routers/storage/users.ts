import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsInt, IsDate, IsString, IsNumber, Matches, IsEmail, IsOptional } from 'class-validator';

export default class UsersDTO {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    // @Expose({ name: 'id_users' })
    // @IsInt()
    // @IsDefined({ message: 'El id_users es obligatorio' })
    // id_users: number;

    @Expose({ name: 'nombre' })
    @IsString()
    @IsDefined({ message: 'El nombre es obligatorio' })
    nombre: number;

    @Expose({ name: 'email' })
    @IsEmail()
    @IsDefined({ message: 'El email es obligatorio' })
    email: string;

    @Expose({ name: 'email_verified_at' })
    @IsString()
    @IsDefined({ message: 'La email_verified_at es obligatoria' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La email_verified_at no tiene el formato correcto' })
    email_verified_at: string;

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

    @Expose({ name: 'foto' })
    @IsString()
    @IsDefined({ message: 'El foto es obligatorio' })
    foto: string;

    @Expose({ name: 'password' })
    @IsString()
    @IsDefined({ message: 'El password es obligatorio' })
    password: string;

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
    @Transform(({ value }) => {
        if (value === null || (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value))) {
            return value;  
        } return { message: () =>  { throw { status: 400, message: "La deleted_at debe ser null o tener el formato de fecha correcto, AAAA-MM-DD"}}}
    })
    @IsOptional()
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: () =>  { throw { status: 400, message: "La deleted_at debe ser null o tener el formato de fecha correcto, AAAA-MM-DD"}}})
    deleted_at: string | null;

    
    constructor(data: Partial<UsersDTO>) {
        Object.assign(this, data);
        this._id = 0;
        // this.id_users = 0;
        this.nombre = 0;
        this.email = '';
        this.email_verified_at = '';
        this.estado = 0;
        this.created_by = 0;
        this.update_by=0;
        this.foto="";
        this.password="";
        this.created_at="";
        this.updated_at = '';
        this.deleted_at = null;
    }
}
