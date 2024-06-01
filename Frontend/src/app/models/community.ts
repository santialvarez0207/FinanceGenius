import { Post } from "./post";

export class Community{
    _id: string;
    name: string;
    posts:Array<string>;

    constructor(_id:string = "",
        name:string = "",
        posts:Array<string> = []
    ){
        this._id = _id;
        this.name = name;
        this.posts = posts
    }
}