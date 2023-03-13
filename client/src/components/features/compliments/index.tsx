import { CreatePost } from '../createpost';
import { Post } from '../post/indext';
import * as C from './styles';
import {useState, useEffect} from 'react';
import { PostType } from '../../../types/UserTypes';
import { api } from '../../../api';
import { postType } from '../../../types/postTypes';
export const Coompliments = ()=>{
    const [posts, setPosts] = useState<postType[]>([]);
    const updatePosts = async()=>{
        let getposts = await api.listPosts()
        let list = []
        for(let i in getposts){
            list.push(getposts[i])
        }
        setPosts(list.reverse())
    }
    const likeFunction = async (e:any)=>{
        let postElement = e.target.parentNode;
        if(postElement.classList.contains('liked')){
            await api.likePost(postElement.id, true)
            e.target.parentNode.classList.toggle("liked");
        }else{
            await api.likePost(postElement.id)
            e.target.parentNode.classList.toggle("liked");
        }
        updatePosts()
    }
    useEffect(()=>{
        updatePosts()
    }, [])
    return(
        <C.Container>
            <CreatePost/>
            {posts.map((e, index)=>(
                <Post key={index} id={e.id} message={e.postcontent} from={e.userfrom} likes={e.likes} to={e.userto} onClickHandle={likeFunction}/>
            ))}
        </C.Container>
    )
}