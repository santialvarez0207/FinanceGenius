export class Post{
    _id: string;
    nameCreator: string;
    _idCreator: string;
    communityName: string;
    _idCommunity: string;
    content: string;
    likes: number;
    title: string;

    constructor(_id:string = "",
        nameCreator:string = "",
        _idCreator:string = "", 
        communityName: string = "",
        _idCommunity: string = "",
        content:string = "", 
        title:string = "", 
        likes:number = 0){
        
            this.communityName = communityName;
            this._idCommunity = _idCommunity;
            this._id = _id;
            this._idCreator = _idCreator;
            this.nameCreator = nameCreator;
            this.content = content;
            this.likes = likes;
            this.title = title;
    }
}