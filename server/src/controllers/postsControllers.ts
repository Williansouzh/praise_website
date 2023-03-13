import { Request, Response } from "express";
import { Posts } from "../models/Posts";
type post = {
    id: number,
    userfrom: string,
    userto: string,
    likes: number,
    postcontent: string
}
export const listPosts = async(req: Request, res: Response)=>{
    let posts = await Posts.findAll();
    let list: post[] =  []
    for(let i in posts){
        list.push(posts[i])
    }
    res.json({
        posts: list
    })
}

export const createPost = async (req: Request, res: Response)=>{
    if(req.body.postcontent){
        let {from, userfrom, userto, postcontent} = req.body;
        let newPost = await Posts.create({
        from,
        userfrom,
        userto,
        likes: 0,
        postcontent
    });
    res.status(200)
    res.json({
        id: newPost.id,
        from
    })
    }else{
        console.log('erro: insira os dados')
        res.json({
            error: 'insira os dados'
        })
    }
}

export const likePost =async (req: Request, res: Response)=>{
    if(req.body.id){
        console.log('existe id')
        let {id, liked} = req.body;
        console.log(liked)
        let post = await Posts.findByPk(id)
        if(post && liked){
            console.log('mais um ')
            post.likes = post.likes - 1
            await post?.save()
        }else if(post && !liked){
            console.log('menos um ')
            post.likes = post.likes + 1
            await post?.save()
        }else{
            console.log('error 000000')
        }
        
        res.json({post, id, liked:post && liked})
        
    }else{
        console.log('id não enviado')
        res.json({
            error: 'id não enviado'
        })
    }
}