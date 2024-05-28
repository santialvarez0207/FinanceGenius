export class Post{
    _id: string;
    nameCreator: string;
    _idCreator: string;
    communityName: string;
    content: string;
    likes: number;

    constructor(_id:string = "",
        nameCreator:string = "",
        _idCreator:string = "", 
        communityName: string = "",
        content:string = "", 
        likes:number = 0){
        
            this.communityName = communityName;
            this._id = _id;
            this._idCreator = _idCreator;
            this.nameCreator = nameCreator;
            this.content = content;
            this.likes = likes;
    }
}