import { Model } from 'mongoose';
import { Tag, TagDocument } from './tags.schema';
export declare class TagsService {
    private tagsModel;
    constructor(tagsModel: Model<TagDocument>);
    findAll(): import("mongoose").Query<(Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, TagDocument>;
    create(name: string): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: string): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
