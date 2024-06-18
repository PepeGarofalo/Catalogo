"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iniciativa = void 0;
const typeorm_1 = require("typeorm");
let Iniciativa = class Iniciativa extends typeorm_1.BaseEntity {
};
exports.Iniciativa = Iniciativa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.Unique)("unique_id", ["id"]),
    __metadata("design:type", Number)
], Iniciativa.prototype, "identificador", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "nombre_iniciativa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "tematica", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "propietario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "hectareas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "nombre_provincia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "nombre_municipio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], Iniciativa.prototype, "latitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], Iniciativa.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "contacto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "telefonos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iniciativa.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", String)
], Iniciativa.prototype, "facebook", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", String)
], Iniciativa.prototype, "instagram", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", String)
], Iniciativa.prototype, "twitter", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }) // Valor predeterminado es falso
    ,
    __metadata("design:type", Boolean)
], Iniciativa.prototype, "destacada", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true, default: null }) // Permitir un array de strings (rutas de las imágenes)
    ,
    __metadata("design:type", Array)
], Iniciativa.prototype, "imagenes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)() //propieda de actualizacion 
    ,
    __metadata("design:type", Date)
], Iniciativa.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Iniciativa.prototype, "updatedAd", void 0);
exports.Iniciativa = Iniciativa = __decorate([
    (0, typeorm_1.Entity)()
], Iniciativa);
