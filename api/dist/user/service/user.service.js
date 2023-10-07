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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const rxjs_1 = require("rxjs");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../models/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(user) {
        return (0, rxjs_1.from)(this.userRepository.save(user));
    }
    findOne(id) {
        return (0, rxjs_1.from)(this.userRepository.findOneBy({ id }));
    }
    findAll() {
        return (0, rxjs_1.from)(this.userRepository.find());
    }
    deleteOne(id) {
        return (0, rxjs_1.from)(this.userRepository.delete(id));
    }
    updateOne(id, user) {
        return (0, rxjs_1.from)(this.userRepository.update(id, user));
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map