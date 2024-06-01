import { Post } from "./post";
import { Community } from "./community";

export class User{
    _id: string;
    email: string;
    name: string;
    password: string;
    posts:Array<string>;
    follows: Array<string>
    likes: Array<string>

    constructor(_id:string = "",
        email: string = "",
        name: string = "",
        password: string = "",
        posts:Array<string> = [],
        follows: Array<string> = [],
        likes: Array<string> = []){
        
            this._id = _id;
            this.name = name;
            this.email = email;
            this.password = password;
            this.posts = posts;
            this.follows = follows;
            this.likes = likes;
    }
}