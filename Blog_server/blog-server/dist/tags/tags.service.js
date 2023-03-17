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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tags_schema_1 = require("./tags.schema");
let TagsService = class TagsService {
    constructor(tagsModel) {
        this.tagsModel = tagsModel;
    }
    findAll() {
        return this.tagsModel.find();
    }
    create(name) {
        const createTag = new this.tagsModel({ name });
        return createTag.save();
    }
    async delete(id) {
        const tag = await this.tagsModel.findByIdAndDelete(id);
        if (!tag) {
            throw new common_1.NotFoundException();
        }
        return tag;
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tags_schema_1.Tag.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map