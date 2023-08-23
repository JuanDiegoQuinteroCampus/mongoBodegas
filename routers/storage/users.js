var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString, Matches, IsEmail } from 'class-validator';
export default class UsersDTO {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.id_users = 0;
        this.nombre = 0;
        this.email = '';
        this.email_verified_at = '';
        this.estado = 0;
        this.created_by = 0;
        this.update_by = 0;
        this.foto = "";
        this.password = "";
        this.created_at = "";
        this.updated_at = '';
        this.deleted_at = '';
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsInt(),
    IsDefined({ message: 'El _id es obligatorio' }),
    __metadata("design:type", Number)
], UsersDTO.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'id_users' }),
    IsInt(),
    IsDefined({ message: 'El id_users es obligatorio' }),
    __metadata("design:type", Number)
], UsersDTO.prototype, "id_users", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsString(),
    IsDefined({ message: 'El nombre es obligatorio' }),
    __metadata("design:type", Number)
], UsersDTO.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsEmail(),
    IsDefined({ message: 'El email es obligatorio' }),
    __metadata("design:type", String)
], UsersDTO.prototype, "email", void 0);
__decorate([
    Expose({ name: 'email_verified_at' }),
    IsString(),
    IsDefined({ message: 'La email_verified_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La email_verified_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], UsersDTO.prototype, "email_verified_at", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsInt(),
    IsDefined({ message: 'El estado es obligatorio' }),
    __metadata("design:type", Number)
], UsersDTO.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsInt(),
    IsDefined({ message: 'El created_by es obligatorio' }),
    __metadata("design:type", Number)
], UsersDTO.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    IsInt(),
    IsDefined({ message: 'El update_by es obligatorio' }),
    __metadata("design:type", Number)
], UsersDTO.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'foto' }),
    IsString(),
    IsDefined({ message: 'El foto es obligatorio' }),
    __metadata("design:type", String)
], UsersDTO.prototype, "foto", void 0);
__decorate([
    Expose({ name: 'password' }),
    IsString(),
    IsDefined({ message: 'El password es obligatorio' }),
    __metadata("design:type", String)
], UsersDTO.prototype, "password", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsString(),
    IsDefined({ message: 'La created_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La created_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], UsersDTO.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    IsString(),
    IsDefined({ message: 'La updated_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La updated_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], UsersDTO.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    IsString(),
    IsDefined({ message: 'La deleted_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La deleted_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], UsersDTO.prototype, "deleted_at", void 0);
