/// <reference types="mongoose" />
import { TagsService } from './tags.service';
export declare class TagsController {
    private tagService;
    constructor(tagService: TagsService);
    findAll(): import("mongoose").Query<(import("./tags.schema").Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], import("./tags.schema").Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./tags.schema").TagDocument>;
    create(tag: string): Promise<import("./tags.schema").Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: string): Promise<import("./tags.schema").Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
