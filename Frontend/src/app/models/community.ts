import { Post } from "./post";

export class Community{
    _id: string;
    name: string;
    posts:Array<Post>;

    constructor(_id:string = "",
        name:string = "",
        posts:Array<Post> = []
    ){
        this._id = _id;
        this.name = name;
        this.posts = posts
    }
}