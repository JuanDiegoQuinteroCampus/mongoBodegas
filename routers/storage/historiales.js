var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsInt, IsString, IsNumber, Matches, IsOptional } from 'class-validator';
export default class HistorialesDTO {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        // this.id_historiales = 0;
        this.cantidad = 0;
        this.id_bodega_origen = 0;
        this.id_bodega_destino = 0;
        this.id_inventario = 0;
        this.created_by = 0;
        this.update_by = 0;
        this.created_at = "";
        this.updated_at = '';
        this.deleted_at = null;
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsInt(),
    IsDefined({ message: 'El _id es obligatorio' }),
    __metadata("design:type", Number)
], HistorialesDTO.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    IsNumber(),
    IsDefined({ message: 'El cantidad es obligatorio' }),
    __metadata("design:type", Number)
], HistorialesDTO.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'id_bodega_origen' }),
    IsInt(),
    IsDefined({ message: 'El id_bodega_origen es obligatorio' }),
    __metadata("design:type", Number)
], HistorialesDTO.prototype, "id_bodega_origen", void 0);
__decorate([
    Expose({ name: 'id_bodega_destino' }),
    IsInt(),
    IsDefined({ message: 'El id_bodega_destino es obligatorio' }),
    __metadata("design:type", Number)
], HistorialesDTO.prototype, "id_bodega_destino", void 0);
__decorate([
    Expose({ name: 'id_inventario' }),
    IsInt(),
    IsDefined({ message: 'El id_inventario es obligatorio' }),
    __metadata("design:type", Number)
], HistorialesDTO.prototype, "id_inventario", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsInt(),
    IsDefined({ message: 'El created_by es obligatorio' }),
    __metadata("design:type", Number)
], HistorialesDTO.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    IsInt(),
    IsDefined({ message: 'El update_by es obligatorio' }),
    __metadata("design:type", Number)
], HistorialesDTO.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsString(),
    IsDefined({ message: 'La created_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La created_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], HistorialesDTO.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    IsString(),
    IsDefined({ message: 'La updated_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La updated_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], HistorialesDTO.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => {
        if (value === null || (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value))) {
            return value;
        }
        return { message: () => { throw { status: 400, message: "La deleted_at debe ser null o tener el formato de fecha correcto, AAAA-MM-DD" }; } };
    }),
    IsOptional(),
    IsString(),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: () => { throw { status: 400, message: "La deleted_at debe ser null o tener el formato de fecha correcto, AAAA-MM-DD" }; } }),
    __metadata("design:type", String)
], HistorialesDTO.prototype, "deleted_at", void 0);
