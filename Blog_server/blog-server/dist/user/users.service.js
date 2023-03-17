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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("./users.schema");
const bcrypt = require("bcrypt");
const role_enum_1 = require("../roles/role.enum");
const articles_schema_1 = require("../articles/articles.schema");
let UsersService = class UsersService {
    constructor(usersModel, articleModel) {
        this.usersModel = usersModel;
        this.articleModel = articleModel;
    }
    findAll() {
        return this.usersModel.find().populate('bookmarks');
    }
    async findOne(id) {
        const user = await this.usersModel.findById(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async findOneByUsername(name) {
        const user = await this.usersModel.findOne({ name });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async findOneByUsernameWithPassword(name) {
        const user = await this.usersModel
            .findOne({ name })
            .select(['name', 'password']);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async create(createUserDto) {
        const createUser = new this.usersModel(createUserDto);
        const salt = await bcrypt.genSalt();
        createUser.password = await bcrypt.hash(createUserDto.password, salt);
        createUser.roles.push(role_enum_1.Role.USER);
        createUser.activate = true;
        return await createUser.save();
    }
    setAdminRole(id) {
        return this.usersModel.updateOne({ _id: id }, { role: [role_enum_1.Role.ADMIN] });
    }
    async setUnsetActivate(id) {
        const user = await this.usersModel.findById(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return await this.usersModel.updateOne({ _id: id }, { activate: !user.activate });
    }
    async delete(id) {
        const user = await this.usersModel.findById(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        await this.articleModel.deleteMany({ author: user });
        return this.usersModel.findByIdAndDelete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(articles_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map