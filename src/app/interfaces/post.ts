export interface Post {
    title:string,
    permalink:string,
    category:{
        categoryId:string,
        category:string
    },
    postImgPath:string,
    excerpt:string,
    content:string,
    isfeatured:boolean,
    views:number,
    likes:number,
    createdAt:Date,
    status:string
}

