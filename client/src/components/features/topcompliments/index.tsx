import { useEffect, useState } from 'react';
import { api } from '../../../api';
import { postType } from '../../../types/postTypes';
import { Post } from '../post/indext';
import * as C from './styles';

export const TopCompliments = ()=>{
    const [topCompliments, setTopCompliments] = useState<postType[]>([]);

    const updatePosts = async ()=>{
        let response = await api.listPosts();
        let list:postType[] = []
        for(let i in response){
            list.push(response[i])
        };
        setTopCompliments(list.sort((a, b)=>a.likes - b.likes).reverse());
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
            {topCompliments.map((e, index)=>(
                <Post key={index} id={e.id} message={e.postcontent} from={e.userfrom} likes={e.likes} to={e.userto} onClickHandle={likeFunction}/>
            ))}
        </C.Container>
    )
}