import { Post } from "./post";
import { Community } from "./community";

export class User{
    _id: string;
    email: String;
    name: String;
    password: String;
    posts:Array<Post>;
    follows: Array<Community>

    constructor(_id:string = "",
        email: String = "",
        name: String = "",
        password: String = "",
        posts:Array<Post> = [],
        follows: Array<Community> = []){
        
            this._id = _id;
            this.name = name;
            this.email = email;
            this.password = password;
            this.posts = posts;
            this.follows = follows;
    }
}