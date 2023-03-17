"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const roles_guard_1 = require("../roles/roles.guard");
const tags_controller_1 = require("./tags.controller");
const tags_schema_1 = require("./tags.schema");
const tags_service_1 = require("./tags.service");
let TagsModule = class TagsModule {
};
TagsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: tags_schema_1.Tag.name, schema: tags_schema_1.TagSchema }])],
        controllers: [tags_controller_1.TagsController],
        providers: [tags_service_1.TagsService],
        exports: [tags_service_1.TagsService],
    })
], TagsModule);
exports.TagsModule = TagsModule;
//# sourceMappingURL=tags.module.js.map