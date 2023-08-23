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
import { IsDefined, IsInt, IsString, Matches } from 'class-validator';
export default class InventariosDTO {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.id_inventarios = 0;
        this.id_bodega = 0;
        this.id_producto = 0;
        this.cantidad = 0;
        this.created_by = 0;
        this.update_by = 0;
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
], InventariosDTO.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'id_inventarios' }),
    IsInt(),
    IsDefined({ message: 'El id_inventarios es obligatorio' }),
    __metadata("design:type", Number)
], InventariosDTO.prototype, "id_inventarios", void 0);
__decorate([
    Expose({ name: 'id_bodega' }),
    IsString(),
    IsDefined({ message: 'El id_bodega es obligatorio' }),
    __metadata("design:type", Number)
], InventariosDTO.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: 'id_producto' }),
    IsInt(),
    IsDefined({ message: 'El id_producto es obligatorio' }),
    __metadata("design:type", Number)
], InventariosDTO.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    IsInt(),
    IsDefined({ message: 'El cantidad es obligatorio' }),
    __metadata("design:type", Number)
], InventariosDTO.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsInt(),
    IsDefined({ message: 'El created_by es obligatorio' }),
    __metadata("design:type", Number)
], InventariosDTO.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    IsInt(),
    IsDefined({ message: 'El update_by es obligatorio' }),
    __metadata("design:type", Number)
], InventariosDTO.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsString(),
    IsDefined({ message: 'La created_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La created_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], InventariosDTO.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    IsString(),
    IsDefined({ message: 'La updated_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La updated_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], InventariosDTO.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    IsString(),
    IsDefined({ message: 'La deleted_at es obligatoria' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La deleted_at no tiene el formato correcto' }),
    __metadata("design:type", String)
], InventariosDTO.prototype, "deleted_at", void 0);
